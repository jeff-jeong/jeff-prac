//파트 1 그냥 쓴것 이 나온다 + 지우기
//파트 2 로컬에 저장해서 새로고침해도 나온다

const form = document.getElementById("form")
const input = form.querySelector("input")
const todoList = document.getElementById("list")

//todoData는 바뀌니까 let 으로
let todoData = []


function removeTodo(e){
  //버튼과 함께 li 전체를 지워야하니까 parentElement를 받아온다
  
  const check = e.target.parentElement
  check.remove()
  todoData = todoData.filter((potato) => potato.id !== parseInt(check.id))
  saveTodos()
  
}

function saveTodos() {
  //투두 데이터에 푸쉬하는데 하나넣을때마다 리셋된다
  //newtodo를 받아오는게 아니다 todoData라는 어레이를 저장해주는거다
  //근데 어레이 형식으로 저장이 안된다 그래서 json strigfy 를 쓰는거다
  localStorage.setItem("newtodo", JSON.stringify(todoData))
}


function painter(newTodo){
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.name
  const btn = document.createElement("button")
  btn.innerText = "X"
  li.appendChild(span)
  li.appendChild(btn)
  todoList.appendChild(li)
  btn.addEventListener("click", removeTodo)
}


function sumbitHandler(e){
  e.preventDefault()
  const newTodo = input.value
  
  input.value = ""
  
  // 푸쉬는 = 라는 형태가 아니다 push() 이런형태로가야지 = 는 뭐라고 정의하는형태다
  const newTodoObj = {
    name:newTodo,
    id:Date.now()
  }
  
  todoData.push(newTodoObj)
  painter(newTodoObj)
  saveTodos()
}

form.addEventListener("submit", sumbitHandler)

const savedTodo = JSON.parse(localStorage.getItem("newtodo"))
console.log(savedTodo)
if(savedTodo){
  //forEach의 사용법을 이해하자
  savedTodo.forEach(painter);
}