"use strict";
const gameScreen = document.getElementById("screen");
let counter = document.getElementById("counter");

//step 1 랜덤 width 와 height값을 가진 타겟을 만들자
//2 타겟에 스타일을 주고 처음좌표와 끝좌표를 정해주자
//3 타겟을 처음좌표부터 끝좌표까지 이동시켜보자 (move)
//4 동시에 여러개가 나오도록 설정해보자
//5 클릭했을때 사라지고 카운트가 올라가도록 설정해보자

const move_target = (target, target_end, target_duration) => {
  target.style.left = `${target_end.x}%`;
  target.style.top = `${target_end.y}%`;

  setTimeout(() => {
    target.remove();
    counter.innerHTML = parseInt(counter.textContent.trim()) - 1;
  }, target_duration * 1000);
};

const create_target = (potato) => {
  let target = document.createElement("div");

  let target_size = potato && potato.target_size ? potato.target_size : 10;
  //세팅에서 넘겨준 애들을 다가져와 start: 뭐다라고 정의했잖아 그 start를 다가져와
  let target_start = potato && potato.start ? potato.start : { x: -20, y: -20 };
  let target_end = potato && potato.end ? potato.end : { x: 100, y: 100 };
  let target_duration = potato && potato.duration ? potato.duration : 3;
  let target_bg =
    potato && potato.backgroundColor ? potato.backgroundColor : "blck";

  gameScreen.style.position = "relative";
  target.style.position = "absolute";
  target.style.display = "inline-block";
  target.style.borderRadius = "50%";
  target.style.backgroundColor = `${target_bg}`;
  target.style.width = `${target_size}px`;
  target.style.height = `${target_size}px`;
  target.style.left = `${target_start.x}%`;
  target.style.top = `${target_start.y}%`;
  target.style.transition = `all ${target_duration}s`;

  gameScreen.appendChild(target);

  target.addEventListener("mousedown", () => {
    counter.innerHTML = parseInt(counter.textContent.trim()) + 1;
    target.remove();
  });

  setTimeout(() => {
    move_target(target, target_end, target_duration);
  }, 100);
};

//여러개 만들어줘야하니까 타겟셋팅으로 묶어준다

const set_target = () => {
  let color_options = [
    "#6262e0",
    "#cf8bfc",
    "#cec1e8",
    "#ede6f5",
    "#f9d366",
    "#fdd79b",
    "#fccd7f",
    "#c6e2ff",
    "#b4c1fe",
    "#b7235b",
    "#000000",
    "#ef852f",
    "#ff10df",
    "#6d1fff",
    "#0cffdb",
    "#9400d3",
    "#0000ff",
    "#76ee00",
    "#ffff00",
    "#ff9900",
    "#ff0000",
    "#8e7cc3",
    "#da70d6",
    "#00ffff",
    "#ff00ff",
    "#8b9dc3",
    "#c6e2ff",
    "#8deeee",
    "#faed72",
    "#ebfa85",
    "#f7fdce",
    "#800000",
    "#305a63",
    "#674ea7",
    "#741519",
    "#65b0bb",
    "#bb6c5d",
    "#b4c1fe",
    "#e2d0ca",
    "#ffbdcc",
    "#ffafc1",
    "#c7a598",
  ];

  let target_size = Math.floor(Math.random() * Math.pow(10, 2) + 1);

  //타겟 스타트라는 오브젝트를 만들자 그안에넣어줄들을 정의
  let target_start = {};
  target_start.x = Math.floor(Math.random() * Math.pow(10, 2) + 1);
  target_start.y = Math.floor(Math.random() * Math.pow(10, 2) + 1);

  let target_bg =
    color_options[Math.floor(Math.random() * color_options.length)];

  let target_end = {};
  target_end.x = Math.floor(Math.random() * Math.pow(10, 2) + 1);
  target_end.y = Math.floor(Math.random() * Math.pow(10, 2) + 1);

  let target_duration = Math.floor(Math.random() * Math.pow(10, 1) + 3);

  let target_setting = {
    target_size: target_size,
    start: target_start,
    end: target_end,
    duration: target_duration,
    backgroundColor: target_bg,
  };

  create_target(target_setting);
};

set_target();
setInterval(() => {
  set_target();
}, 500);
