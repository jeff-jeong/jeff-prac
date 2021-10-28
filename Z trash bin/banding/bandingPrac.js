//1.자판기 숫자 투입 그숫자만큼 자판기생성
//2.유저가 직접 아이템과 가격입력

'use strict'

const bd_mchns = document.getElementById("banding-machines")

function add_bd_mchn(num) {
    console.log(num)
    for(let i = 0; i<num; i++){
        const bd_mchn = document.createElement("div")
        bd_mchn.innerText = `자판기${i}`
        bd_mchns.appendChild(bd_mchn)
    }

}

add_bd_mchn(5)


