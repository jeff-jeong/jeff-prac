const clock = document.querySelector(".clock");



function tik() {
    const time = new Date();
const timeHours = String(time.getHours()).padStart(2, "0");
const timeMin = String(time.getMinutes()).padStart(2, "0");
const timeSecond = String(time.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${timeHours}:${timeMin}:${timeSecond}`;
};


tik();
setInterval(tik, 1000);

//막힌부분 인터벌 설정했는데 1초마다 갱신이 안됌 새로고침하면 00:00:00에서 한번 바뀌고 안바뀜
//해결 = const로 불러온 시간들을 tik 안에 넣어줘야해 갱신될때 같이안에 있어야지
//padStart의 위치
//00초가 보일때 일단 ()를 통한 펑션의 즉시실행




