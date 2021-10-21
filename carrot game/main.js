//카운터 / 당근 클릭했을때 점수 1씩 / 벌레눌렀을때 게임오버 
'use strict'

const gameScreen = document.querySelector(".game-screen")
const startBtn = document.querySelector(".start")
const restartBtn = document.querySelector(".restart")
const result = document.querySelector(".result_screen")
const resultMsg = document.querySelector("span")
const counter = document.querySelector(".timer")

function timer() {
    
    if(parseInt(counter.innerText) <= 0){
        showResult()
        resultMsg.innerText = "You Lost"
        score.textContent = 0
    }
    if(parseInt(counter.innerText) !== 0){
        counter.innerHTML = parseInt(counter.innerText) -1;
    }
}


function carrotNum(num){

    for(let i = 0; i<num; i++){
        item_setting()
        bug_setting()
    }
}

function showResult() {
    result.classList.remove("hidden")
}

let score = document.querySelector(".score")

function createCarrot(carrot_rocation) {
    const carrot = document.createElement("img")
    carrot.setAttribute("src", "img/carrot.png")
    carrot.setAttribute("class", "carrot")
    //화면 전체 비율에 넓직하게 퍼지려면 px이아니라 %로해야한단다
    carrot.style.left = `${carrot_rocation.x}%`
    carrot.style.top = `${carrot_rocation.y}%`
    carrot.addEventListener("click", ()=>{
        
        score.innerHTML = parseInt(score.textContent.trim()) + 1
        carrot.remove()
        if(parseInt(score.textContent) === 10){
            showResult()
            resultMsg.innerText = "You Win"
            score.textContent = 0
        }
        
    })
    gameScreen.appendChild(carrot)
}



function createBug(bug_rocation) {
    const bug = document.createElement("img")
    bug.setAttribute("src", "img/bug.png")
    bug.setAttribute("class", "bug")
    bug.style.left = `${bug_rocation.x}%`
    bug.style.top = `${bug_rocation.y}%`
    bug.addEventListener("click", ()=>{
        showResult()
        resultMsg.innerText = "You Lost"
        score.textContent = 0
        
    })
    gameScreen.appendChild(bug)
}

function item_setting () {
    let item_rocation = {}
    item_rocation.x = Math.floor(Math.random() * Math.pow(10, 2) +1)
    item_rocation.y = Math.floor(Math.random() * Math.pow(10, 2) +1)
    createCarrot(item_rocation)
}

function bug_setting () {
    let bug_rocation = {}
    bug_rocation.x = Math.floor(Math.random() * Math.pow(10, 2) +1)
    bug_rocation.y = Math.floor(Math.random() * Math.pow(10, 2) +1)
    createBug(bug_rocation)
}



carrotNum(10)
startBtn.addEventListener("click",()=>{
    result.classList.add("hidden")
    gameScreen.innerHTML = ""
    carrotNum(10)
    counter.innerText = 10
    setInterval(()=>{
     timer()    
    }, 1500);
})

restartBtn.addEventListener("click", ()=>{
    
    result.classList.add("hidden")
    gameScreen.innerHTML = ""
    carrotNum(10)
    counter.innerText = 10
    setInterval(()=>{
     timer()    
    }, 1000);
})
