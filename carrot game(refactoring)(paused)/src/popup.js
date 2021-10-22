'use strict'

export default class PopUp {
    constructor(){
    this.popUp = document.querySelector(".pop-up")
    this.popUpText = document.querySelector(".pop-up__msg")
    this.popUpRefresth = document.querySelector(".pop-up__refresh")
    this.popUpRefresth.addEventListener("click", ()=>{
        this.onClick && this.onClick();
        this.hide();
    })    
    }
    setClickListener(onClick){
        this.onClick = onClick;
    }

    showWithText(text){
      this.popUpText.innerText = text
      this.popUp.classList.remove("pop-up--hide")
    }

    hide() {
      this.popUp.classList.add('pop-up--hide')
    }
}