

var bd_machns = document.getElementById("banding-machines");

// const bd_machn = document.createElement("div")
// bd_machn.classList.add("banding-machine")
// bd_machn.innerHTML = "자판기"

// bd_machns.appendChild(bd_machn);

function add_banding_machine(num){

    for (var i = 0; i < num; i++){
        var bd_machn = document.createElement("div")
        bd_machn.classList.add("banding-machine")
        bd_machn.classList.add(`bnading-machine_${i + 1}`)
        bd_machn.innerHTML = `자판기 ${i + 1}`

        var items = document.createElement("div")
        items.classList.add("items")
        items.innerHTML = "Items List"

        bd_machn.appendChild(items)
        bd_machns.appendChild(bd_machn)


        var item_data = [
            {slug:"hi1", name:"test1", price:"test1" },
            {slug:"hi2", name:"test2", price:"test2" },
            {slug:"hi3", name:"test3", price:"test3" },
            {slug:"hi4", name:"test4", price:"test4" },
            {slug:"hi5", name:"test5", price:"test5" },
            {slug:"hi6", name:"test6", price:"test6" },
        ]

        for(var j = 0; j < item_data.length; j++){
            var item_name = document.createElement("div")
            item_name.classList.add("item")
            
            // item_name.classList.add(`item_${j + 1}`)
            item_name.classList.add(`item_name_${item_data[j]["slug"]}`)
            item_name.innerHTML = item_data[j]["name"]
            
            items.appendChild(item_name)



        }

        



    }



}

add_banding_machine(2);