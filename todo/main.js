"use strict";
const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");
const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  onAdd()
})

//1씩 증가하는 아이디 만들기
let id = 0;
function painter(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
                <div class="item">
                  <span class="item__name">${text}</span>
                  <button class="item__delete">
                      <i class="fas fa-trash-alt"  data-id=${id}></i>
                  </button>
                </div>
                <div class="item__divider"></div>
                `;

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute("class", "item__divider");
  // const item = document.createElement("div")
  // item.setAttribute("class", "item")

  // const itemName = document.createElement("span");
  // itemName.setAttribute("class", "item__name")
  // itemName.innerText = text;

  // const removeItem = document.createElement("button");
  // removeItem.setAttribute("class", "item__delete");
  // removeItem.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  // removeItem.addEventListener("click", () => {
  //   itemRow.remove();
  // });

  // item.appendChild(itemName)
  // item.appendChild(removeItem)

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  id++;
  return itemRow;
}

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    //아무것도 없으면 걍 리턴
    return;
  }
  const item = painter(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  //인풋에 값을 입력하고도 계속 인풋에 머무를수있게해줌 (디테일)
  input.focus();
}



//form 태그 안에 안쌋을경우 이렇게 써줘야한다
// addBtn.addEventListener("click", () => {
//   onAdd();
// });

// //엔터키로 실행

// input.addEventListener("keydown", (e) => {
//   //한국어로 입력하려면 이걸 추가해야한다 만들어지고있으면 리턴
//   if (e.isComposing) {
//     return;
//   }
//   if (e.code == "Enter") {
//     onAdd();
//   }
// });





//부모컨테이너에서 원하는걸 눌렀을때 발생
items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

//자 무엇이 잘못되었나 문제 1 스크롤바가 생기면 input이 위로 딸려올라간다 2 코드가 길고 복잡하다
// 엔터키를 눌렀을때와 클릭을 눌럿을때 하나의 함수가 발생하도록 해야하는데 그러지못함
//CSS 디테일이 딸림
