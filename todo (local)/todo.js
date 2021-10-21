const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDoData = [];
//어레이 만드는건 펑션으로 만드는게 아니라 그냥 const로 설정 
//업뎃 꾸준히 할꺼라 let으로 시작

const TODO_KEYS = "todos";

function saveToDo() {
    localStorage.setItem(TODO_KEYS, JSON.stringify(toDoData));    
}

function removeToDo(event) {
    //지울애를 먼저 설정해줘야함 
    const li = event.target.parentElement;
    li.remove();
    toDoData = toDoData.filter((potato) => potato.id !== parseInt(li.id));
    saveToDo();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    //버튼이 언제 실행
    btn.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(btn);
    //li 를 최종적으로 리스트에 넣어주는걸 까먹음
    toDoList.appendChild(li);
}

function handler(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    //localStorage.setItem("ToDO", newToDo);
    //로컬 스토리지에 어레이 형식으로 저장하고싶은데 단일 저장만 된다
    const toDoDataObj = {
        text:newToDo,
        id : Date.now(),
    };

    toDoData.push(toDoDataObj);
    //setItem 아아니라 그냥 push 해주면 된다
    toDoInput.value = "";
    paintTodo(toDoDataObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handler);



const savedToDos = localStorage.getItem(TODO_KEYS);
//모든 경우를 생각해보기 로컬스토리지가 null 값일수도 있다

//savedToDos 그냥 적는건 !== (~이지 않을경우과 같다)
if (savedToDos){
    const parsedToDo = JSON.parse(savedToDos);
    toDoData = parsedToDo;
    parsedToDo.forEach(paintTodo);
    //arrow function
}