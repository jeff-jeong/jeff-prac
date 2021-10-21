const frames = document.getElementById("frames");
const frame = frames.querySelector("div");


frame.addEventListener("click", function(e){
    if (frame.textContent.includes("빔")) {
    
        frame.innerText = "앞면";
    
        
    
    } else if(frame.textContent.includes("앞면")) {
        frame.innerText = "뒷면";
        
    } else if(frame.textContent.includes("뒷면")) {
        
        var waffles = document.getElementById("waffles")
        var fish = document.createElement("div")
        fish.innerHTML = "붕어빵"
        waffles.appendChild(fish)
        
        
        
        frame.innerText = "빔";
        
        
    
    
        //만든 div에 inner text 넣고 클래스도 넣어야하는데 이렇게 만든 div를 어떻게 불러오지?
        //그냥 바로 불러오고 만든것.innerHTML = "이름" 이라고쓰면된다
        // 시바 앞면으로 변한걸 또 눌러도 작동이 안되네 이미 작동해서그런가
        //클릭할때마다 이펑션이 계속 실행될수있도록 하자
    
    }

})


