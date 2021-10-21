
'use strict'

const IMG_SIZE = 80
const CARROT_COUNT = 5
const BUG_COUNT = 5
const Game_Duration_Sec = 5


const field = document.querySelector(".game-field")
const fieldRect = field.getBoundingClientRect()
const gameBtn = document.querySelector(".game-btn") 
const gameTimer = document.querySelector(".game-timer")
const gameScore = document.querySelector(".game-score") 

//변수지정
let started = false;
let score = 0
//나중에 타임어 시작하기도 중지하기도 해야해서 글로벌로 선언
let timer = undefined

gameBtn.addEventListener("click", ()=>{
    if(started) {
        stopGame()
    }else {
        startGame()
    }
    //실행한후 스타트 값을 반대로 바꿔줘
    started = !started
})

function startGame(){
    initGame()
    showStopBtn()
    showScoreAndTimer()
    startGameTimer()
}

function stopGame() {
    stopGameTimer()
    hideGameBtn()
    showPopUpWithText('REPLAY?')
}




function showStopBtn() {
    const icon = gameBtn.querySelector(".fa-play")
    icon.classList.add("fa-stop")
    icon.classList.remove("fa-play")
}


function hideGameBtn(){
    
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
    field.innerHTML = ''
    gameScore.innerText = CARROT_COUNT

    addItem('carrot', CARROT_COUNT, 'img/carrot.png')
    addItem('bug', BUG_COUNT, 'img/bug.png')
}


//뭔가 추가해주는 펑션을 만들때 뭘 받아올지를 대충 먼저 정하고 펑션을 만들자
function addItem(className, count, imgPath) {
    //포지션 앱솔 기준 가장 끝부분 왼쪽위 는 0 0
    const x1 = 0
    const y1 = 0
    //끝부분은 게임필디의 가로 / 세로
    //이미지사이즈는 좌표기준 으로 크기만큼 밑으로 생성되서 그 크기만큼 빼줘야 제일끝에 좌표받고 생성되도 밖으로 튀어나가지 않음
    const x2 = fieldRect.width - IMG_SIZE
    const y2 = fieldRect.height - IMG_SIZE
    for(let i = 0; i<count; i++){
        const item = document.createElement("img")
        item.setAttribute("class", className)
        item.setAttribute("src", imgPath)
        item.style.position = "absolute"
        const x = randomNum(x1, x2)
        const y = randomNum(y1, y2)
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        field.appendChild(item)

    }

}

function randomNum(min, max) {
    return Math.random()*(max - min) + min
}

