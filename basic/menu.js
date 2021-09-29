const set = [
    {
    menu:"beef",
    kind:"meat"
    },
    {
        menu:"beef",
        kind:"meat"
    },
    {
        menu:"pork",
        kind:"meat"
    },
    {
        menu:"chicken",
        kind:"meat"
    },
    {
        menu:"tomato",
        kind:"vege"
    },
    {
        menu:"potato",
        kind:"vege"
    },
    {
        menu:"bean",
        kind:"vege"
    },
]




const menu = document.querySelector("#menu span:first-child");
const kind = document.querySelector("#menu span:last-child");


const todayMenu = set[Math.floor(Math.random() * set.length)];

menu.innerText = todayMenu.menu;
kind.innerText = todayMenu.kind;



//막히는곳 데이터 배열 // 숫자랜덤 설정까진 가능인데 그걸 텍스트로 옮겨오기
//해결 1. 어레이 콜은 이름[순서] 로한다 2. 텍스트 = 콜.원하는거(오브젝트중)

//어레이 안에 있는 오브젝트를 콜하는방법
