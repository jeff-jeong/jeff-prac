const clock = document.getElementById("clock")


function tictoc(){

    
    const date = new Date()
    
    const hours = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")
    const sec = String(date.getSeconds()).padStart(2, "0")
    
    clock.innerText = `${hours}:${min}:${sec}`
}

tictoc()
setInterval(tictoc, 1000)


const random = document.getElementById("random")
const menuSpan = random.querySelector("span:first-child")
const priceSpan = random.querySelector("span:last-child")


const random_data = [
    {menu:"coffee1", price:"600"},
    {menu:"coffee2", price:"500"},
    {menu:"coffee3", price:"400"},
    {menu:"coffee4", price:"300"},
    {menu:"coffee5", price:"200"},
    {menu:"coffee6", price:"100"},
]

const todaysCoffee = random_data[Math.floor(Math.random()*random_data.length)]

menuSpan.innerText = todaysCoffee.menu
priceSpan.innerText = todaysCoffee.price


