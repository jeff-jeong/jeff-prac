//1 데이터 작성 및 화면에 표시
//2 필터 효과


const userScreen = document.getElementById("screen")
const latestBtn = document.getElementById("filter_latest")
const oldestBtn = document.getElementById("filter_oldest")

const timeData = [
    {name:"test1", date:"01/01/2021"},
    {name:"test2", date:"01/02/2021"},
    {name:"test3", date:"01/03/2021"},
    {name:"test4", date:"01/04/2021"},
    {name:"test5", date:"01/05/2021"},
]



//1. 어레이 안에잇는 데이터를 화면에 표시하는 방법
//어레이 안에 오브젝트 형식 으로 저장했어서 name에 바로 접근이 안된다
//여러개 불러올려면 for로 룹을 돌려줘야함 


const create_list = (timeData, potato) => {
     list = document.createElement("div")
    userScreen.appendChild(list)

    switch(potato) {
        case "latest":
            timeData.sort((a, b) => {
                //구조가 이해가 안감 + NaN라고 뜸
                let a_date = new Date(a.date).getTime()
                let b_date = new Date(b.date).getTime()
                return b_date - a_date
            })

        break;
        case "oldest":
            timeData.sort((a, b)=>{
                let a_date = new Date(a.date).getTime()
                let b_date = new Date(b.date).getTime()

                return a_date - b_date
            })
        break;
        default:

        break;
    }

    //토마토가 어레이안에 각각의 오브젝트를 불러오고 토마토안에 있는 name 과 time을 불러오면된다
    for(const tomato of timeData) {
    
        let list_item = document.createElement("div")
        list_item.innerHTML = `<div>${tomato.name}</div><div>${tomato.date}</div>`
        list.appendChild(list_item)
    }
}
create_list(timeData)

latestBtn.addEventListener("click", (e)=>{
    userScreen.innerHTML = ""
    create_list(timeData, "latest")
})

oldestBtn.addEventListener("click", (e)=>{
    userScreen.innerHTML = ""
    create_list(timeData, "oldest")
})




