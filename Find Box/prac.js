const screen = document.getElementById("screen")
const downBtn = document.querySelector(".downBtn")
const moveBtn = document.querySelector(".moveBtn")
const colorBtn = document.querySelector(".colorBtn")
const colorBox = document.querySelector(".color")

downBtn.addEventListener("click", (e) => {
    window.scrollBy(0,100)
})

moveBtn.addEventListener("click", (e) => {
    window.scrollTo(0,100)
})

colorBtn.addEventListener("click", (e) => {
    colorBox.scrollIntoView({behavior:"smooth", block:"center"})
})