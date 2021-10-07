
const form = document.getElementById("form")
const input = form.querySelector("input")
const notice = document.getElementById("notice")


function generateMessage(msg){
  const message = document.createElement("div")
  message.innerText = msg
  notice.appendChild(message)
}



function submitHandler(e){
    e.preventDefault()
    const userAge = input.value
    input.value = ""
    if(isNaN(userAge) || userAge < 0){
      notice.innerHTML = ""
      generateMessage("숫자를 똑바로입력해 임마")
    } else if (userAge < 20){
      notice.innerHTML = ""
      generateMessage("미성년자는 가라")
    } else if(userAge > 100){
      notice.innerHTML = ""
      generateMessage("장례식장으로 모시겠습니다")
    } else {
      notice.innerHTML = ""
      generateMessage("어서오세요 고갱님")
    }

}



form.addEventListener("submit", submitHandler)


