document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("btn")
    const screen = document.getElementById("screen")


    let computerNum;


    function makeInput(computerNum){
        

        const input = document.createElement("input")
        input.setAttribute("id", "input")
        input.setAttribute("type", "number")
        input.setAttribute("placeholder", "숫자를 입력해주세요")
        
        screen.appendChild(input)

        //Input에 숫자를 입력도안했는데 메시지가 나온다
        //input에 이벤트 리스너를 넣어서 엔터를 눌렀을때만 값을 비교하도록하자

        


        input.addEventListener("keyup", function(e){
            
            const userNum = parseInt(input.value)
            if(e.code === "Enter"){
                console.log(computerNum, userNum)
                if(computerNum > userNum){
                    greeting("정답은 그거보다 커용")
                    input.remove()
                    makeInput(computerNum)
                    
                    
                } else if(computerNum < userNum){
                    greeting("정답은 그거보다 작아용")
                    input.remove()
                    makeInput(computerNum)

                } else {
                    greeting("정답")

                }
            }



        })

        


    }

    function greeting(msg){
        const message = document.createElement("div")
        message.innerText = msg
        screen.appendChild(message)
    }

    function gameStart(){
        screen.innerHTML = ""
        greeting("게임을 시작합니다")
       let randomNum = Math.random()
       let position = 3;
       
       for(i = 0; i<position; i++){
           //그냥 랜덤넘버 * 10을 3번 룹을 돌렸는데 왜안될까?
           // ~~은 ~~다 라는 형식을 기억하자 (업데이트)
           randomNum = randomNum * 10
       }
       randomNum = Math.floor(randomNum)
       computerNum = randomNum


       
       greeting("컴퓨터가 숫자를 골랐습니다")
       makeInput(computerNum)
    }

    btn.addEventListener("click", gameStart)

})


