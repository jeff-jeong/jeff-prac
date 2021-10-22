// 1 당금 벌레 랜덤 배치
// 2 게임 시작
// 3 타이머 배치
// 4 게임 정지
// 5 게임 마무리


'use strict'


//나중에 수정하기 쉽게 숫자를 미리 정의해두기
const IMG_SIZE = 80
const CARROT_COUNT = 5
const BUG_COUNT = 5
const Game_Duration_Sec = 5


const field = document.querySelector(".game-field")
//엘리먼트의 여러가지 값 받아올수있음
const fieldRect = field.getBoundingClientRect()
const gameBtn = document.querySelector(".game-btn") 
const gameTimer = document.querySelector(".game-timer")
const gameScore = document.querySelector(".game-score") 
const popUp = document.querySelector(".pop-up")
const popUpText = popUp.querySelector("span")
const popUpRefresth = popUp.querySelector("button")

//여러곳의 function에서 쓰이는 변수를 글로벌로 먼저 선언
let started = false;
let score = 0
//나중에 타임어 시작하기도 중지하기도 해야해서 글로벌로 선언
let timer = undefined

//재시작 버튼을 눌렀을때
popUpRefresth.addEventListener("click", ()=>{
    startGame()
    hidePopUp()
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
    showPopUpWithText('REPLAY?')
}


function finishGame(win) {
    started = false;
    hideGameBtn()
    stopGameTimer()
    showPopUpWithText(win ? "You WoN" : "You Lost")
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

function showPopUpWithText(text) {
    popUpText.innerText = text
    popUp.classList.remove("pop-up--hide")
}

function hidePopUp() {
    popUp.classList.add("pop-up--hide")
}


function initGame() {
    score = 0
    field.innerHTML = ''
    gameScore.innerText = CARROT_COUNT

    addItem('carrot', CARROT_COUNT, 'img/carrot.png')
    addItem('bug', BUG_COUNT, 'img/bug.png')
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

