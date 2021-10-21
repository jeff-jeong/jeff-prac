//파트 1 그냥 쓴것 이 나온다 + 지우기
//파트 2 로컬에 저장해서 새로고침해도 나온다

//Oct6
//todoData는 바뀌니까 let 으로
  //버튼과 함께 li 전체를 지워야하니까 parentElement를 받아온다

  //투두 데이터에 푸쉬하는데 하나넣을때마다 리셋된다
  //newtodo를 받아오는게 아니다 todoData라는 어레이를 저장해주는거다
  //근데 어레이 형식으로 저장이 안된다 그래서 json strigfy 를 쓰는거다
  // 푸쉬는 = 라는 형태가 아니다 push() 이런형태로가야지 = 는 뭐라고 정의하는형태다
  //forEach의 사용법을 이해하자

const form = document.getElementById("form")
const input = form.querySelector("input")
const list = document.getElementById("list")

let todoData = []

function removeTodo(e){
  const check = e.target.parentElement
  check.remove()
  //필터 사용법 id 체크하려면 감자의 아이디도 가져와야지 // 로컬에 저장된건 스트링형식 그래서 숫자로 바꿔준다
  todoData = todoData.filter(potato => potato.id !== parseInt(check.id))
  saveTodo()
  console.log(check.id, todoData)
  
}

function painter(newTodoObj){
  const li = document.createElement("li")
  li.id = newTodoObj.id
  const span = document.createElement("span")
  span.innerText = newTodoObj.text
  const btn = document.createElement("button")
  btn.innerText = "X"
  btn.addEventListener("click", removeTodo)
  li.appendChild(span)
  li.appendChild(btn)
  list.appendChild(li)

}

//하나씩만 저장된다고 input에 넣을때마다 로컬데이터가 리셋되용



function saveTodo(){
  localStorage.setItem("todos", JSON.stringify(todoData))
}

function submitHandler(e){
  e.preventDefault()
  const newTodo = input.value
  input.value = ""
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  }
  painter(newTodoObj)
  todoData.push(newTodoObj)
  saveTodo()
}

form.addEventListener("submit", submitHandler)
//제이슨을 통한 어레이의 저장 // 어레이 되돌리기
const savedTodo = JSON.parse(localStorage.getItem("todos"))

if(savedTodo) {
  savedTodo.forEach(item => painter(item)); 
}

