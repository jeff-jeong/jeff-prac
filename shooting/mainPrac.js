"use strict";
//타겟 생성
//시작좌표 끝좌표
//사라지고 계속 반복

//클릭하면 없어지고 카운트 1개씩

const userScreen = document.getElementById("screen");

const move_target = (target, target_end, target_duration) => {
  target.style.left = `${target_end.x}%`;
  target.style.top = `${target_end.y}%`;
  setTimeout(() => {
    target.remove();
  }, target_duration * 1000);
};

const create_target = (tomato) => {
  const target = document.createElement("div");

  let target_size =
    tomato && tomato.target_size ? tomato.target_size : 100 + "px";
  let target_bg =
    tomato && tomato.backgroundColor ? tomato.backgroundColor : "white";
  let target_start = tomato && tomato.start ? tomato.start : { x: -20, y: -20 };
  let target_end = tomato && tomato.start ? tomato.start : { x: 100, y: 100 };
  let target_duration = tomato && tomato.duration ? tomato.duration : 3;

  userScreen.style.position = `relative`;
  target.style.position = `absolute`;
  target.style.display = `inline-block`;
  target.style.width = `${target_size}px`;
  target.style.height = `${target_size}px`;
  target.style.backgroundColor = target_bg;
  target.style.top = `${target_start.x}%`;
  target.style.left = `${target_start.y}%`;
  target.style.borderRadius = `50%`;
  target.style.transition = `all ${target_duration}s ease-in-out`;
  //현재문제 end좌표값으로 이동을 안한단다 생성될때 이미 끝좌표로 가있어 한 1초뒤에 실행해야할꺼같은데
  userScreen.appendChild(target);

  setTimeout(() => {
    move_target(target, target_end, target_duration);
  }, 100);

  target.addEventListener("mousedown", () => {
    let counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.textContent.trim()) + 1;
    target.remove();
  });
};

const set_target = () => {
  let target_size = Math.floor(Math.random() * Math.pow(10, 2) + 1);
  //탑과 레프트의 최대값은 어느기준으로 정해야하는거지 유저스크린의 width와 height에서 벗어나면 안되잖아

  let target_start = {};
  target_start.x = Math.floor(Math.random() * Math.pow(10, 2) + 1);
  target_start.y = Math.floor(Math.random() * Math.pow(10, 2) + 1);

  let target_end = {};
  target_end.x = Math.floor(Math.random() * Math.pow(10, 2) + 1);
  target_end.y = Math.floor(Math.random() * Math.pow(10, 2) + 1);

  let target_duration = Math.floor(Math.random() * Math.pow(10, 1) + 3);

  //px값등 기타값은은 css 설정해주는 곳에서
  const target_setting = {
    target_size: target_size,

    backgroundColor: "red",
    start: target_start,
    end: target_end,
    duration: target_duration,
  };
  create_target(target_setting);
};

//계속 같은값으로 실행되자너
//타겟을 셋팅해주는 셋타겟을 펑션으로 만들고 그 펑션을 계속 새로 실행
set_target();
setInterval(() => {
  set_target();
}, 500);
