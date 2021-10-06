const form = document.getElementById("form")
const input = form.querySelector("input")
const greeting = document.getElementById("greeting")

const HIDDEN_KEY = "hidden"
const USERNAME_KEY = "username"


function submitHandler(e){
  e.preventDefault();
  const username = input.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreeting(username)

}

function paintGreeting(username){
  greeting.innerText = `Hello ${username}`
  form.classList.add(HIDDEN_KEY)
}

const savedName = localStorage.getItem(USERNAME_KEY)

if(savedName === null){
  form.addEventListener("submit", submitHandler)

}else {
  paintGreeting(savedName)
}

