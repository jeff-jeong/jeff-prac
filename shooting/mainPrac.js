'use strict'
//타겟 생성 
//시작좌표 끝좌표
//사라지고 계속 반복
//클릭하면 없어지고 카운트 1개씩
const userScreen = document.getElementById("screen")

const create_target = (tomato) => {
    const target = document.createElement("div")

    target.style.width = tomato && tomato.width ? tomato.width:100 + "px"
    target.style.height = tomato && tomato.height ? tomato.height:100 + "px"
    target.style.backgroundColor = tomato && tomato.backgroundColor ? tomato.backgroundColor:"white"
    target.style.top = tomato && tomato.start_top ? tomato.start_top:10 + "px"
    target.style.left = tomato && tomato.start_left ? tomato.start_left:10 + "px"
    

    target.style.borderRadius = `50%`
    userScreen.style.position = `relative`
    target.style.position = `absolute`
    //현재문제 end좌표값으로 이동을 안한단다 생성될때 이미 끝좌표로 가있어 한 1초뒤에 실행해야할꺼같은데
    
    setTimeout(()=> {
        target.style.transition = `all 1s ease-in-out`
        target.style.transform = `translate(${tomato.end_top}, ${tomato.end_left})`

    }, 500)

    

    userScreen.appendChild(target)
    
}



let target_size = Math.floor(Math.random() * Math.pow(10, 2) + 1)
//탑과 레프트의 최대값은 어느기준으로 정해야하는거지 유저스크린의 width와 height에서 벗어나면 안되잖아

let start_top = Math.floor(Math.random() * Math.pow(10, 2) + 1)
let start_left = Math.floor(Math.random() * Math.pow(10, 2) + 1)
let end_top = Math.floor(Math.random() * Math.pow(10, 2) + 1)
let end_left = Math.floor(Math.random() * Math.pow(10, 2) + 1)



const target_setting = {
    width:`${target_size}px`,
    height:`${target_size}px`,
    backgroundColor: "red",
    start_top:`${start_top}px`,
    start_left:`${start_left}px`,
    end_top:`${end_top}px`,
    end_left:`${end_left}px`,
}

create_target(target_setting)
//계속 같은값으로 실행되자너
setInterval(() => {
    create_target(target_setting)
}, 1000);