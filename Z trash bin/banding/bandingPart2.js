document.addEventListener("DOMContentLoaded", function(e){
    
    const bd_mchns = document.getElementById("banding-machines")
    const bd_mchn = document.createElement("div")
    bd_mchn.classList.add("banding_machine")
    bd_mchn.innerHTML = "자판기"

    function add(num) {

        for( let j=0; j < num; j ++){
            const itm_list = document.createElement("div")
    
    
            const itms_data = [
                {
                    slug : "1",
                    name : "익은김치",
                    price : "100"
                },
                {
                    slug : "2",
                    name : "바나나",
                    price : "200"
                },
                {
                    slug : "3",
                    name : "치즈",
                    price : "300"
                },
                {
                    slug : "4",
                    name : "햄",
                    price : "400"
                },
                {
                    slug : "5",
                    name : "어른",
                    price : "500"
                },
            ]
        
            // for(let i=0; i < itms_data.length; i++){
                
            //         const item_name = document.createElement("div")
            //         item_name.innerHTML = itms_data[i]["name"]
                
                
                
                
            //         itm_list.appendChild(item_name)
            //         bd_mchn.appendChild(itm_list)
            //         bd_mchns.appendChild(bd_mchn)
        
            // }
            for(const itm of itms_data){
                
                const item_name = document.createElement("div")
                item_name.innerHTML = itm["name"]
            
            
            
            
                itm_list.appendChild(item_name)
                bd_mchn.appendChild(itm_list)
                bd_mchns.appendChild(bd_mchn)
    
        }      
        }
    }

    add(3)

})

//파트 1 그냥 자판기 실행
//파트 2 숫자를 넣으면 그 숫자만큼 자판기 생성