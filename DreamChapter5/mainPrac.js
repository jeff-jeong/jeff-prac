const form = document.querySelector("form")
const input = document.querySelector(".footer__input")
const addBtn = document.querySelector(".footer__btn")
const items = document.querySelector(".items")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    onAdd()
    
})


let id = 0;
function painter(text){
    
    const itemRow = document.createElement("li")
    itemRow.setAttribute("class", "item__row")
    itemRow.setAttribute("data-id", id)
    //아이템로우에 아이디를 부여 같은 이이디를 쓰레기통아이콘에 부여
    itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
          <i class="fas fa-trash-alt"  data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
    `;
    id++;
    return itemRow;

} 

function onAdd(){
    const text = input.value
    if(text === ""){
        input.focus()
        return;
    }
    const item = painter(text)
    items.appendChild(item)
    item.scrollIntoView({block:"center"})
    input.value = ""
    input.focus()
}

//부모컨테이너에서 원하는걸 눌렀을때 발생
items.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    
    if (id) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    }
  });