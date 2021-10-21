//파트 1 그냥 쓴것 이 나온다 + 지우기
//파트 2 로컬에 저장해서 새로고침해도 나온다

const form = document.getElementById("form");
const input = form.querySelector("input");
const list = document.getElementById("list");

let todoData = [];

function saveTodos() {
  //일반 할일들이 그대로 텍스트 형태로 저장되지않고 어레이상태그대로 [] 포함 같이 저장할땐 Json stringfy를 사용
  localStorage.setItem("todos", JSON.stringify(todoData));
}

function removeTodo(e) {
  const checkTodo = e.target.parentElement;
  checkTodo.remove();
}

function painter(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
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
  todoData.push(newTodo);
  painter(newTodo);
  saveTodos();
}

form.addEventListener("submit", submitHandler);

const savedtodos = localStorage.getItem("todos");
if (savedtodos) {
  const parsedTodos = JSON.parse(savedtodos);
  todoData = parsedTodos
  //   for (const item of parsedTodos) {
  //     console.log(`This is turn of ${item}`);
  //   }
  parsedTodos.forEach(painter);
}
