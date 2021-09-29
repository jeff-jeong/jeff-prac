document.addEventListener("DOMContentLoaded", function (e) {
    // 다큐먼트 컨텐트 로딩이 끝났을 때의 이벤트를 콘솔에 찍어본다
    // console.log(e)
  
    // 자판기들을 집어넣을 돔을 ID로 가져온 후 변수에 저장
    var bd_mchns = document.getElementById("banding_machines")
  
    // 저장된 변수를 확인하기 위해 콘솔에 찍어본다
    // console.log(bd_mchns)
  
    // 자판기 div를 만든다
    // var bd_mchn = document.createElement("div")
    // 만든 자판기에 구분을 위해 클래스를 추가한다
    // bd_mchn.classList.add("banding_machine")
    // 만든 자판기에 임시 컨텐츠를 넣는다
    // bd_mchn.innerHTML = "자판기"
  
    // 자판기 목록에 자판기 추가
    // bd_mchns.appendChild(bd_mchn)
  
    // 자판기를 생성해주는 함수 생성
    function add_banding_machine(number_of_banding_machines) {
      // 반복을 방지하기 위한 자판기 목록 초기화
      bd_mchns.innerHTML = ""
  
      // 자판기 갯수가 정해져 있지 않다면
      if (!number_of_banding_machines) {
        // 기본값을 1로 설정해라
        number_of_banding_machines = 1
      }
      // 시작점을 0으로 설정; 시작점이 원하는 자판기 갯수보다 적은 동안; 매턴 끝에 시작점 갯수 1씩 증가;
      for (var i = 0; i < number_of_banding_machines; i++) {
  
        // 자판기 div 생성
        var bd_mchn = document.createElement("div")
        // 자판기에 공통 클래스 생성
        bd_mchn.classList.add(`banding_machine`)
        // 자판기에 순서별 클래스 생성
        bd_mchn.classList.add(`banding_machine_${i + 1}`)
  
        // 자판기에 임시 컨텐츠를 넣는다
        bd_mchn.innerHTML = `자판기 ${i + 1}`
  
        // 상품 목록 div 생성
        var items = document.createElement("div")
        // 상품 목록에 클래스 추가
        items.classList.add("items")
        // 상품 목록에 임시 컨텐츠 추가
        items.innerHTML = "Item List"
  
        // 자판기에 상품 목록 추가
        bd_mchn.appendChild(items)
  
        // 자판기 목록에 자판기를 추가한다
        bd_mchns.appendChild(bd_mchn)
  
        // 상품 데이터 생성 {상품이름, 상품가격}
        var items_data = [
          { slug: "letsBeMild", name: "레쓰비 마일드", price: 1200 },
          { slug: "mountainDew", name: "마운틴 듀", price: 2000 },
          { slug: "confidence", name: "컨피던스", price: 500 },
          { slug: "cocoPalm", name: "코코팜", price: 1700 },
          { slug: "powerAde", name: "파워에이드", price: 1900 },
          { slug: "eyeOfSol", name: "솔의눈", price: 900 },
        ]
  
        // 상품 데이커 콘솔에 확인
        // console.log(items_data)
  
        // 상품목록 반복 시작점 설정; 시작점이 상품데이터의 길이보다 작을동안 계속 반복; 매턴 시작점 1씩 증가
        for (var j = 0; j < items_data.length; j++) {
          // 상품 div 생성
          var item = document.createElement("div")
          // 상품에 공통 클래스 추가
          item.classList.add("item")
          // 상품에 개별 클래스 추가
          item.classList.add(`item_${j + 1}`)
  
          // 상품 이름 div 생성
          var item_name = document.createElement("div")
          // 상품 이름에 공통 클래스 추가
          item_name.classList.add("item_name")
          // 상품 이름에 개별 클래스 추가 (*최대한 상품에 초점을 맞추어 정의한다)
          // 1번의 경우 첫번째 아이템의 이름으로 클래스를 주기 때문에 모든 자판기의 첫번째 아이템이 상품에 상관없이 같은 클래스를 가진다
          item_name.classList.add(`item_name_${j + 1}`)
          // 2번의 경우 클래스를 상품에 초점을 맞추어서 생성하기 때문에 자판기마다 상품들의 목록이 다르더라도 상품별로 같은 스타일을 주기가 쉽다
          item_name.classList.add(`item_name_${items_data[j]["slug"]}`)
          // 상품 이름 컨텐츠 추가
          item_name.innerHTML = items_data[j]["name"]
  
          // 상품 가격 div 생성
          var item_price = document.createElement("div")
          // 상품 가격에 공통 클래스 추가
          item_price.classList.add("item_price")
          // 상품 가격에 개별 클래스 추가 (*최대한 상품에 초점을 맞추어 정의한다)
          // 1번의 경우 첫번째 아이템의 가격으로 클래스를 주기 때문에 모든 자판기의 첫번째 아이템이 상품에 상관없이 같은 클래스를 가진다
          item_price.classList.add(`item_price_${j + 1}`)
          // 2번의 경우 클래스를 상품에 초점을 맞추어서 생성하기 때문에 자판기마다 상품들의 목록이 다르더라도 상품별로 같은 스타일을 주기가 쉽다
          item_price.classList.add(`item_price_${items_data[j]["slug"]}`)
          // 상품 가격 컨텐츠 추가
          item_price.innerHTML = items_data[j]["price"]
  
          // 상품에 이름 추가
          item.appendChild(item_name)
          // 상품에 가격 추가
          item.appendChild(item_price)
          // 상품을 상품 리스트에 추가
          items.appendChild(item)
        }
      }
    }
  
    // 자판기 생성 함수 호출
    add_banding_machine(3)
  })