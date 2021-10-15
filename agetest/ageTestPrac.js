const form = document.getElementById("form")
const input = document.querySelector("input")
const notice = document.querySelector("#notice")


const greeting = (text) => {
  notice.innerText = text
}


function checkAge(age){
  console.log(age)
  if(isNaN(age) || age < 0 ){
    greeting("올바른 나이를 입력하세요")
  } else if (age < 20){
    greeting("미성년자는 꺼져라")
  } else if (age > 100){
    greeting("무덤이나 가쇼")
  } else {
    greeting("고객님 환영합니다")
  }
  
}


form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const age = input.value
  input.value = ""
  input.focus()
  checkAge(age)
})