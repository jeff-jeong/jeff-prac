document.addEventListener("DOMContentLoaded", function (e) {
  const btn = document.getElementById("btn");
  const screen = document.getElementById("screen");

  let computerNum;

  function generateMsg(msg) {
    let message = document.createElement("div");
    message.innerHTML = msg;
    screen.appendChild(message);
  }

  function generateInput(computerNum) {
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "숫자를 입력하세요");

    screen.appendChild(input);


    //switch가 아니다 사용자가 숫자를적고 '입력'을했을때를 생각
    //input에 이벤트리스너를 더한다

    input.addEventListener("keyup", function (e) {
      if (e.code == "Enter") {
        //input값을 정의해주자
        let input_value = e.target.value;
        generateMsg(`${input_value}를 선택하셨습니다`);

        //지금 이시점에서 computerNum이 undefiend 상태


        // 랜덤넘버가 undefiend라고 뜬다
        //비교대상은 랜덤넘버가아니라 업데이트한 컴퓨터넘버야아한다
        if (input_value > computerNum) {
          //1)작동이 반대로된다 2)인풋이 다시 생성이 안된다

          generateMsg("정답은 그거보다 작다");
          input.remove();
          //기존 input을 지우고 새로 추가하려하니 위에서 인풋만드는과정을 다시넣는게 좀 그렇다
          //버튼과 input 생성기를 따로하자 나는 합쳐서 만들었다 인풋만드는 펑션을 만들고 그걸 다시실행시켜주자
          generateInput(computerNum);
        } else if (input_value < computerNum) {
          generateMsg("정답은 그거보다 크다");

          input.remove();
          generateInput(computerNum);
        } else {
          generateMsg("정답!! 다시하려면 스타트 게임 눌러");
        }
      }
    });
  }

  btn.addEventListener("click", function (e) {
    screen.innerHTML = "";

    generateMsg("game start");

    let random_num = Math.random();
    //몇자리수로 할껀지 정해주자 3자리로할꺼
    let position = 3;
    computerNum = random_num;
    console.log(computerNum);

    for (let i = 0; i < position; i++) {
      computerNum = computerNum * 10;
      console.log(computerNum);
    }

    computerNum = Math.floor(computerNum);
    console.log(computerNum);

    generateMsg("컴퓨터가 숫자를 골랐습니다");
    generateInput(computerNum);
  });
});
