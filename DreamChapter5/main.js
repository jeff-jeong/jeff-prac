'use strict'
const input = document.querySelector("input")
const list = document.querySelector("#list")
const btn = document.querySelector(".addBtn")


function painter(newitem){
    const itemList = document.createElement("li")
    itemList.setAttribute("class", "itemList")
    const itemName = document.createElement("span")
    itemName.innerText = newitem
    const removeItem = document.createElement("button")
    removeItem.innerText = "X"
    removeItem.addEventListener("click", ()=>{
        itemList.remove()
    })
    itemList.appendChild(itemName)
    itemList.appendChild(removeItem)
    list.appendChild(itemList)
}




btn.addEventListener("click", () => {
    const newitem = input.value
    if(newitem === ""){
        alert("목록을 입력해주세요")
    } else {

        input.value = ""
        painter(newitem)
    }
})



// function hi(){
//     console.log("hi")
// }

// document.addEventListener("click", hi)

// document.addEventListener("click", () => console.log("hi"))

// document.addEventListener("click", () => {
//     hi()
// })