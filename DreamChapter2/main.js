//일반 function () {} 를 () => {}



const screen = document.getElementById("screen")
const colorBox = document.querySelector(".color")
const downBtn = document.querySelector(".downBtn")
const moveBtn = document.querySelector(".moveBtn")
const colorBtn = document.querySelector(".colorBtn")

const rec = colorBox.getBoundingClientRect()

colorBox.addEventListener("click", (e) => {
    console.log(rec)
    console.log(`client : ${e.clientX}, ${e.clientY} page : ${e.pageX}, ${e.pageY}`)
})

downBtn.addEventListener("click", (e) => {
    window.scrollBy(0,100)
    
})

moveBtn.addEventListener("click", (e) => {
    window.scrollTo(0,100)
})

colorBtn.addEventListener("click", (e) => {
    // window.scrollTo(0,rec.bottom)
    colorBox.scrollIntoView();
})

