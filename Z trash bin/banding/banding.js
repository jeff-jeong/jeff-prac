document.addEventListener("DOMContentLoaded", function (e) {
  
    var bd_mchns = document.getElementById("banding_machines")
    var form_body = document.querySelector(".banding_machine_form_body")
  
    function add_banding_machine(custom_data) {
      form_body.innerHTML = ""
  
      var number_of_banding_machines = custom_data.length
      if (!number_of_banding_machines) {
        number_of_banding_machines = 1
      }
  
      for (var i = 0; i < number_of_banding_machines; i++) {
  
        var bd_mchn = document.createElement("div")
        bd_mchn.classList.add(`banding_machine`)
        bd_mchn.classList.add(`banding_machine_${i + 1}`)
  
        bd_mchn.innerHTML = `자판기 ${i + 1}`
  
        var items = document.createElement("div")
        items.classList.add("items")
        items.innerHTML = "Item List"
  
        bd_mchn.appendChild(items)
  
        bd_mchns.appendChild(bd_mchn)
  
        var items_data = custom_data[i]
        for (var j = 0; j < items_data.length; j++) {
          var item = document.createElement("div")
          item.classList.add("item")
          item.classList.add(`item_${j + 1}`)
  
          var item_name = document.createElement("div")
          item_name.classList.add("item_name")
          item_name.classList.add(`item_name_${j + 1}`)
          item_name.classList.add(`item_name_${items_data[j]["slug"]}`)
          item_name.innerHTML = items_data[j]["name"]
  
          var item_price = document.createElement("div")
          item_price.classList.add("item_price")
          item_price.classList.add(`item_price_${j + 1}`)
          item_price.classList.add(`item_price_${items_data[j]["slug"]}`)
          item_price.innerHTML = items_data[j]["price"]
  
          item.appendChild(item_name)
          item.appendChild(item_price)
          items.appendChild(item)
        }
      }
    }
  
    function save_machine() {
  
      var products = []
  
      var product_forms = document.querySelectorAll(".banding_machine_product")
  
      for (var k = 0; k < product_forms.length; k++) {
  
        var slug = product_forms[k].querySelector("input[name='slug']").value
        var name = product_forms[k].querySelector("input[name='name']").value
        var price = product_forms[k].querySelector("input[name='price']").value
  
        var product = {
          slug: slug,
          name: name,
          price: price,
        }
  
        products.push(product)
  
        add_banding_machine([products])
      }
    }
  
    function add_another_product() {
        
      var new_product_form = document.createElement("div")
      new_product_form.classList.add("banding_machine_product")
  
      new_product_form.innerHTML = `
            <input type="text" name="slug" placeholder="Slug"/>
            <br>
            <input type="text" name="name" placeholder="Name"/>
            <br>
            <input type="text" name="price" placeholder="Price"/>
      `
      form_body.appendChild(new_product_form)
  
    }
    document.getElementById("save_banding_machine").addEventListener("click", function (e) {
      save_machine()
    })
  
    document.getElementById("add_product").addEventListener("click", function (e) {
      add_another_product()
    })
  })