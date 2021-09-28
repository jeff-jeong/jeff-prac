var bd_mchns = document.getElementById("banding-machines")

function bandingTemplate(num){

    for( var i = 0; i < num; i++){
        var bd_mchn = document.createElement("div")
        bd_mchn.classList.add("banding-machine")
        bd_mchn.innerHTML = `자판기 ${i + 1}`
        

        var item_list = document.createElement("div")
        item_list.classList.add("item_list")
        item_list.innerHTML = "Item List"

        bd_mchn.appendChild(item_list)
        bd_mchns.appendChild(bd_mchn)
   
   
        var item_data = [
            {slug:"test1", name:"test1", price:100},
            {slug:"test2", name:"test2", price:200},
            {slug:"test3", name:"test3", price:300},
            {slug:"test4", name:"test4", price:400},
            {slug:"test5", name:"test5", price:500},
        ]
    
        for(var j = 0; j < item_data.length; j++ ){
            var item_name = document.createElement("div")
            item_name.classList.add("item")
            item_name.classList.add(`item_name_${item_data[j]["slug"]}`)
            item_name.innerText = item_data[j]["name"]
    
    
            var item_price = document.createElement("div")
            item_price.classList.add("item")
            item_price.classList.add(`item_price_${item_data[j]["slug"]}`)
            item_price.innerText = item_data[j]["price"]


            item_list.appendChild(item_name)
            item_list.appendChild(item_price)
            


            
            
            
            
    
        }
   
   
   
    }



}

bandingTemplate(3)