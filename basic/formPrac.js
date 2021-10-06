const form = document.getElementById("form")
const input = form.querySelector("input")
const greeting = document.getElementById("greeting")


function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    form.classList.add("hidden")
}


function submitHandler(e){
    e.preventDefault()
    const username = input.value
    localStorage.setItem("username", username)
    paintGreeting(username)
}

form.addEventListener("submit", submitHandler)

const savedName = localStorage.getItem("username")

if(savedName){
    paintGreeting(savedName)
}

