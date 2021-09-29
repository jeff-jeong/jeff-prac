document.addEventListener("DOMContentLoaded", function(e){

    let frame_list = document.getElementsByClassName("frame")
    

for (const frame of frame_list ){
    
    //이렇게 함수를 짜니까 클릭한번하면 끝 빔에서 앞면 그다음은 없다
    frame.addEventListener("click", function(e){
        if(frame.textContent.includes("빔")) {
            frame.textContent = "앞면"
        } else if(frame.textContent.includes("앞면")){
            frame.textContent = "뒷면"
        } else if(frame.textContent.includes("뒷면")){
            frame.textContent = "빔"
            const waffles = document.getElementById("waffles")
            const waffle = document.createElement("div")
            waffle.textContent = "붕어빵"
            waffles.appendChild(waffle)
            frame.textContent = "빔"
        }
        console.log("hi")
        
    })
}



})