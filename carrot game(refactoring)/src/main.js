// 1 당금 벌레 랜덤 배치
// 2 게임 시작
// 3 타이머 배치
// 4 게임 정지
// 5 게임 마무리


'use strict'
import PopUp from "./popup.js"
import Filed from "./field.js"


//나중에 수정하기 쉽게 숫자를 미리 정의해두기
const IMG_SIZE = 80
const CARROT_COUNT = 5
const BUG_COUNT = 5
const Game_Duration_Sec = 5



const gameBtn = document.querySelector(".game-btn") 
const gameTimer = document.querySelector(".game-timer")
const gameScore = document.querySelector(".game-score") 


//여러곳의 function에서 쓰이는 변수를 글로벌로 먼저 선언
let started = false;
let score = 0
//나중에 타임어 시작하기도 중지하기도 해야해서 글로벌로 선언
let timer = undefined

const gameFinishBanner = new PopUp()
gameFinishBanner.setClickListener(()=>{
    startGame()
})





//이벤트 위임 (벌레 / 당근 각각에 이벤트를 주는게아니라 그들을 감싸는 상위엘리먼트에게 이벤트를 할당) 
field.addEventListener("click", onFieldClick)


gameBtn.addEventListener("click", ()=>{
    if(started) {
        stopGame()
    }else {
        startGame()
    }
    
})

function startGame(){
    started = true
    initGame()
    showStopBtn()
    showScoreAndTimer()
    startGameTimer()
}

function stopGame() {
    started = false
    stopGameTimer()
    hideGameBtn()
    gameFinishBanner.showWithText('REPLAY?')
}


function finishGame(win) {
    started = false;
    hideGameBtn()
    stopGameTimer()
    gameFinishBanner.showWithText(win ? "You WoN" : "You Lost")
}



function showStopBtn() {
    const icon = gameBtn.querySelector(".fas")
    icon.classList.add("fa-stop")
    icon.classList.remove("fa-play")
    gameBtn.style.visibility = 'visible'
}


function hideGameBtn(){
    gameBtn.style.visibility = 'hidden'
}


function showScoreAndTimer(){
    gameScore.style.visibility = 'visible'
    gameTimer.style.visibility = 'visible'
}

function startGameTimer() {
    //남은 시간동안 게임유지
    let remainingTimeSec = Game_Duration_Sec
    updateTimerText(remainingTimeSec);
 timer = setInterval(() => {
     if(remainingTimeSec <= 0){
         clearInterval(timer)
         finishGame(score === CARROT_COUNT)
         return
     }
     updateTimerText(--remainingTimeSec)
 }, 1000);
}




function updateTimerText(time){
    const min = Math.floor(time / 60)
    const sec = time % 60
    gameTimer.innerText = `${min}:${sec}`
}

function stopGameTimer() {
    clearInterval(timer)
}






function initGame() {
    score = 0
    gameScore.innerText = CARROT_COUNT

    
}

function onFieldClick(event) {
    //게임 시작전 클릭했을때 이벤트 발생 방지
    if(!started){
        return
    }
    //
    const target = event.target
    if(target.matches(".carrot")){
        target.remove()
        score++
        updateScoreBoard()
        if(score === CARROT_COUNT){
            finishGame(true)
        }
    } else if(target.matches(".bug")){
        finishGame(false)
    }
}






function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}



function randomNum(min, max) {
    return Math.random()*(max - min) + min
}

