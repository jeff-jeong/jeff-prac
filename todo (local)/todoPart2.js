//파트 1 그냥 쓴것 이 나온다 + 지우기
//파트 2 로컬에 저장해서 새로고침해도 나온다

const form = document.getElementById("form");
const input = form.querySelector("input");
const list = document.getElementById("list");

let todoData = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoData));
}

function removeTodo(e) {
  const checkTodo = e.target.parentElement;
  checkTodo.remove();
  //필터사용
  todoData = todoData.filter((potato) => potato.id !== parseInt(checkTodo.id))
  saveTodos()
}

function painter(newTodo) {
  const li = document.createElement("li");
  //이렇게 간단하게 아이디 주기 있냐?
  li.id = newTodo.id
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "X";

  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);

  btn.addEventListener("click", removeTodo);
}

function submitHandler(e) {
  e.preventDefault();
  const newTodo = input.value;
  input.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  }
  todoData.push(newTodoObj);
  painter(newTodoObj);
  saveTodos();
}

form.addEventListener("submit", submitHandler);

const savedtodos = localStorage.getItem("todos");
if (savedtodos) {
  const parsedTodos = JSON.parse(savedtodos);
  todoData = parsedTodos
  
  parsedTodos.forEach(painter);
}
