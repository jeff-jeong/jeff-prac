
'use strict'

export default class Filed{
    constructor(carootCount, bugCount){
        this.carootCount = carootCount
        this.bugCount = bugCount
        this.field = document.querySelector(".game-field")
        this.fieldRect = field.getBoundingClientRect()
        this.field.addEventListener("click", this.onclick)
    }

    init() {
    this.field.innerHTML = ''
    this._addItem('carrot', CARROT_COUNT, 'img/carrot.png')
    this._addItem('bug', BUG_COUNT, 'img/bug.png')

    }

    setClickListener(onItemClick){
        this.onItemClick = onItemClick
    }

    _addItem(className, count, imgPath) {
        const x1 = 0
        const y1 = 0
        const x2 = this.fieldRect.width - IMG_SIZE
        const y2 = this.fieldRect.height - IMG_SIZE
        for(let i = 0; i<count; i++){
            const item = document.createElement("img")
            item.setAttribute("class", className)
            item.setAttribute("src", imgPath)
            item.style.position = "absolute"
            const x = randomNum(x1, x2)
            const y = randomNum(y1, y2)
            item.style.left = `${x}px`
            item.style.top = `${y}px`
            this.field.appendChild(item)

        }

}

    onclick(event) {
        const target = event.target
        if(target.matches(".carrot")){
            target.remove()
            this.onItemClick && this.onItemClick('carrot')
        } else if(target.matches(".bug")){
            finishGame(false)
            this.onItemClick && this.onItemClick('bug')
        }
    }
}