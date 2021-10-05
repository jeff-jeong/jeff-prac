document.addEventListener("DOMContentLoaded", function(e){
    const view = document.getElementById("view")
    const box = document.createElement("div")

    box.setAttribute("id", "box")

    view.appendChild(box)

    
    window.addEventListener("keydown", function(e){
        
        let view_style = window.getComputedStyle(view)
        let box_style = window.getComputedStyle(box)
    
        const box_top = parseInt(box_style["top"].replace("px", ""))

        const view_height = parseInt(view_style["height"].replace("px", ""))
        const box_height = parseInt(box_style["height"].replace("px", ""))
        const box_left = parseInt(box_style["left"].replace("px", ""))
        const view_widht = parseInt(view_style["width"].replace("px", ""))
        const box_width = parseInt(box_style["width"].replace("px", ""))
        
        
        
        
        switch(e.code){
            case "ArrowDown" :

            if(view_height <= box_height + box_top){
                alert("못가")
            } else if ( view_height - (box_top + box_height) < 7) {
                box.style.top = box_top + view_height - (box_top + box_height) + "px"
            } else {
                box.style.top =  box_top + 7 + "px"
            }

            break;
            case "ArrowUp" :
            if(box_top <= 0){
                alert("못가")
            } else if (view_height - box_top < 7){
                box.style.top =  0 + "px"
            } else {
                box.style.top =  box_top - 7 + "px"
            }
            
            break;
            case "ArrowRight" :
            if(view_widht < box_width + box_left) {
                alert("못가")
            } else if (view_widht - (box_left + box_width) < 7){
                // box.style.left = view_widht + box_width - (box_left + box_width) + "px"
            } else {
                box.style.left = box_left + 7 + "px"
            }
            
            break;
        }
        
    })
    
})