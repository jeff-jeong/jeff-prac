const clock = document.getElementById("clock")


function tictoc(){
    const date = new Date();
    //패드스타트는 스트링에만 적용되니까 받아온 숫자를 스트링으로 변환시켜줌  ()로 펑션 콜을 해준다
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

tictoc()
setInterval(tictoc, 1000)

const random = document.getElementById("random")
const randomName = random.querySelector("span:first-child")
const randomPrice = random.querySelector("span:last-child")

const randomData = [
    //오브젝트 키벨류 키벨류 벨류는 '' 형태로
    {name:'a', price:'b' },
    {name:'c', price:'d' },
    {name:'e', price:'f' },
    {name:'g', price:'h' },
    {name:'q', price:'w' },
]

//랜덤데이터에 몇번째껄 가져올까? 랜덤데이터[랜덤숫자]의 형식
const randomTxt = randomData[Math.floor(Math.random()*randomData.length)]

randomName.innerText = randomTxt.name
randomPrice.innerText = randomTxt.price



