const nameForm = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const nameInput = nameForm.querySelector("input");


const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function handler(e) {
    e.preventDefault();
    const username = nameInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    nameForm.classList.add(HIDDEN_KEY);

    greetingSystem(username);
}

function greetingSystem(a){
    greeting.classList.remove(HIDDEN_KEY);
    greeting.innerText = "Hello " + a;
}



nameForm.addEventListener("submit", handler);

const userSavedName = localStorage.getItem(USERNAME_KEY);

if(userSavedName === null){
    nameForm.classList.remove(HIDDEN_KEY);
}else {

    greetingSystem(userSavedName);
}