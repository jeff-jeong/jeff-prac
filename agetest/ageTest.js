const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(input.value);

  if (isNaN(age) || age < 0) {
    alert("제대로된 나이를 적으시오");
  } else if (age < 18) {
    const alret = document.createElement("div");

    alret.textContent = "어린놈의 샛갸 꺼져";
    input.value = "";
    form.appendChild(alret);
  } else {
    const alret = document.createElement("div");

    alret.textContent = "어서오세요 고갱님";
    input.value = "";
    form.appendChild(alret);
  }
});
