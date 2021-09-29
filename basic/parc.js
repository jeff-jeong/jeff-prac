const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//값이변하는건 항상 const가 아니라 let으로 시작하는걸 잊지말자
let todoData = [];

const loadTodo = localStorage.getItem(TODOS_KEY);

function removeBtn(e){
   const checkBtn  = e.target.parentElement;
   checkBtn.remove();
   //지우고 나서 다음에 또 나타나지않게 id를 검색해 어레이에서 지우고 그값을 다시 로컬데이터로 저장해준다
   todoData = todoData.filter((a) => a.id !== parseInt(checkBtn.id));
   saveTodo();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", removeBtn);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

//현재 문제 로컬데이터에도 그렇고 어레이에도그렇고 하나씩 들어가고 또 입력하면 리셋된다 왜그럴까?
//1. 로컬데이터 셋을 하나의 펑션으로 만든다
//어레이에 푸쉬한 데이터들을 (스트링으로 변화시켜) 로컬스토리지로 저장해주는 과정이다
function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoData));
}

function handler(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    //value들의 구분을 위해 id가 필요하다 id는 매초 다른 date now로 주기로했다
    const todoDataObj = {
        text:newTodo,
        id: Date.now(),
    }
    //이제 데이터안에 오브젝트를 푸쉬한다
    // push 는 펑션이다 정의가 아니다 
    todoData.push(todoDataObj);
    todoInput.value = "";
    paintTodo(todoDataObj);
    //어레이에 푸쉬한 오브젝트들도 스트링형식으로 로컬스토리지에 저장한다
    saveTodo();
}

todoForm.addEventListener("submit", handler);

if(loadTodo){
    //JSON.parse사용해서 스트링값을 원래값으로 가져오자
    const paredTodo = JSON.parse(loadTodo);
    //todoData는 로컬에서 가져온것들
    todoData = paredTodo;
    //어레이안에있는 각각의 것들을 페인트해준다
    paredTodo.forEach(paintTodo);
}