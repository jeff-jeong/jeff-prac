//단순히 키보드 밑으로 눌럿을때 7px 씩 내려가기
//part2 남은공간 7보다 작을때 // 상하좌우 방향

document.addEventListener("DOMContentLoaded", function (e) {
  function game_start() {
    let view = document.getElementById("view");
    let box = document.createElement("div");

    box.setAttribute("id", "box");
    view.appendChild(box);

    document.addEventListener("keydown", function (e) {
      //css 값 가져오기
      let view_style = window.getComputedStyle(view);
      let box_style = window.getComputedStyle(box);

      //view의 높이 parseInt로 숫자만들기 잊지말자
      let view_height = parseInt(view_style["height"].replace("px", ""));
      //박스의 높이
      let box_height = parseInt(box_style["height"].replace("px", ""));

      let view_width = parseInt(view_style["width"].replace("px", ""));
      let box_width = parseInt(box_style["width"].replace("px", ""));

      //박스의 대가리 부분
      let box_top = parseInt(box_style["top"].replace("px", ""));
      let box_left = parseInt(box_style["left"].replace("px", ""));

      switch (e.code) {
        case "ArrowDown":
          //박스의 대가리 + 박스의 높이가 view의 높이보다 크거나 같을때
          if (box_top + box_height >= view_height) {
            alert("못가");
          } else {
            if (view_height - (box_top + box_height) < 7) {
              box.style.top =
                box_top + view_height - (box_top + box_height) + "px";
            } else {
              box.style.top = box_top + 7 + "px";
            }
          }

          break;
        case "ArrowUp":
          if (box_top <= 0) {
            alert("못가");
          } else {
            if (box_top < 0) {
              box.style.top = 0 + "px";
            } else {
              box.style.top = box_top - 7 + "px";
            }
          }

          break;

        case "ArrowRight":
          if (box_left + box_width >= view_width) {
            alert("못가");
          } else {
            //7보다 작을만큼 조금남았을때
            if (view_width - (box_left + box_width) < 7) {
              box.style.left =
                box_left + view_width - (box_left + box_width) + "px";
            } else {
              box.style.left = box_left + 7 + "px";
            }
          }

          break;
        case "ArrowLeft":
          if (box_left <= 0) {
            alert("못가");
          } else {
            //7보다 작을만큼 조금남았을때
            if (box_left < 7) {
              box.style.left = 0 + "px";
            } else {
              box.style.left = box_left - 7 + "px";
            }
          }

          break;
      }
    });
  }

  game_start();
});
