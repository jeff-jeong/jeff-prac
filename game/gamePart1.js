//단순히 키보드 밑으로 눌럿을때 7px 씩 내려가기



document.addEventListener("DOMContentLoaded", function(e){
  


    function game_start(){
        const view = document.getElementById("view")
        const box = document.createElement("div")
        //만든 div에 어떻게 아이디를 추가하는가
        // setAttribute 를 이용
    
        box.setAttribute("id", "box")
        view.appendChild(box)

        
        

        //view 와 box의 height를 가져왔는데 박스가 view 끝에 닿는다는걸 어떻게 알수있을까?

        
        document.addEventListener("keydown", function(e){
            
            

            // let box_style = box.getComputedStyle 가 아니라
            let box_style = window.getComputedStyle(box)
            
            //view와 box의 height를 가져와야지 어떻게?
            //css 값 가져오기
            //top값을 가져오자
            let box_top = parseInt(box_style["top"].replace("px", ""))
            console.log(box_top)
            // switch ()안에 뭘 넣어야하나요?
            // 콘솔에 e 를넣고 찍어보면 여러 정보들이 나오는데 그중에서 어떤키를 누른건지 찾아주는 e.code를 가져온다 (화살표눌렀을때를 체크하기위해)

            switch(e.code){
                //ArrowDown 이다 스펠링주의
                case "ArrowDown" :

                
                //일단 단순히 7px만 내려가도록 하려면 어떻게해야할까
                //css의 값이중요 top:0; 포지션 앱솔

                
                box.style.top = box_top + 7 + "px"

                break;
    
            }
        })
        // keydown 을 눌렀는데 이벤트가 발생하지않는데 왜그런거지 click으로 바꿨을땐 실행됌
        // keydown 이벤트는 document에 주는것
    }

    game_start()

  
  
})



