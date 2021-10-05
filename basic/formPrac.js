const form = document.getElementById("form");
const input = form.querySelector("input");
const greeting = document.getElementById("greeting");

function submitHandler(e) {
  e.preventDefault();
  const username = input.value;

  paintGreeting(username);

  localStorage.setItem("username", username);
}

function paintGreeting(username) {
  form.classList.add("hidden");
  greeting.innerText = `Hello ${username}`;
}

const SavedUsername = localStorage.getItem("username");

if (SavedUsername === null) {
  form.classList.remove("hidden");
  form.addEventListener("submit", submitHandler);
} else {
  paintGreeting(SavedUsername);
}
