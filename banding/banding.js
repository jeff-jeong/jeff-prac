document.addEventListener("DOMContentLoaded", function(e){
    const bd_mchns = document.getElementById("banding-machines")


function add (num) {

    
    
    for(i = 0; i < num; i++){
        
        const bd_mchn = document.createElement("div")
        bd_mchn.classList.add("banding-machine")
        bd_mchn.textContent = `자판기${i+1}`
        bd_mchns.appendChild(bd_mchn)
        
        let itm_data = [
            {slug:"hi", name:"김치", price:"1200"},
            {slug:"hi2", name:"김치맨", price:"1300"},
            {slug:"hi3", name:"김치빵", price:"1400"},
            {slug:"hi4", name:"김치전", price:"1500"},
            {slug:"hi5", name:"김치국", price:"1600"}
        
        ]
        
        
        for(const hi of itm_data){
            const item_name = document.createElement("div")
            bd_mchn.appendChild(item_name)
            item_name.textContent = hi["name"]

            const item_price = document.createElement("div")
            bd_mchn.appendChild(item_price)
            item_price.textContent = hi["price"]

        }

    }
}



add(4);


})