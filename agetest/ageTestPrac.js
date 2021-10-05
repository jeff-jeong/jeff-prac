const form = document.getElementById("form")
const input = document.getElementById("input")

function notice(content){
    const msg = document.createElement("div")
    msg.innerHTML = content
    form.appendChild(msg)
}


form.addEventListener("submit", function(e){
    //폼 제출을 멈추는 이 형식을 기억해둬~
    e.preventDefault();

    const input_value = parseInt(input.value)

    console.log(input_value)

    if(isNaN(input_value) || input_value < 0){
        notice("숫자를 제대로 입력해주세요")
        input.value = ""
    } else if (input_value < 20) {
        notice("미성년자는 꺼지시오")
        input.value = ""
    } else {
        notice("어서오세요 고객님")
        input.value = ""
    }
})







