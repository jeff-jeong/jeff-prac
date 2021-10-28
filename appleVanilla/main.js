// var human = {
//     name: '손흥민',
//     sayHi: function(){
//         console.log(`안녕나는 ${this.name}`)
//     }
//   }
  
//   human.sayHi(); //안녕 나는 손흥민



// 2번


// var sample = { 
//     data : [1,2,3,4,5],
    
    
//   }
  
// const reducer = (a, b) => a + b;
// function add() {
//     console.log(sample.data.reduce(reducer));
// }



// function add() {
//     let result = 0
//     sample.data.forEach((a)=>{
//         result = result + a
//     })
//     console.log(result)
// }


// add()

// document.getElementById('버튼').addEventListener('click', function(){
//     console.log(this)
//     let test = () => {
//         console.log(this.innerHTML)
//     }
//     setTimeout(test, 1000)
    
    

//   });

  

//  let pants = 20
//  let socks = 100

//  let data = console.log(`바지${pants}양말은${socks}`)

//  function mchns(a, b, c){
//      console.log(a[1] + b + a[0] + c)
     

//  }

//  mchns`바지${pants}양말은${socks}`

// let pants = 0
// let socks = 100

// let data = console.log(`바지${pants}양말은${socks}`)

// function mchns(a, b, c){
//     if(b == 0){
//         b = `안팔아요`
//     }
//     console.log(a[0] + b + a[1] + c)
    

// }

// mchns`바지${pants}양말은${socks}`

//1.'김''밥''1''2''3'
//2. 2
//3. 10
//4. NaN
//5. 

// function arr(...rest){
//     return rest
//   }
  
  
//   var newArray = arr(1,2,3,4,5);
//   console.log(newArray); 


//   //6. 

  
//  let numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
//  console.log(Math.max(...numbers)) 

 //7. 
//  function clean(...rest){
//     console.log(rest.sort())
//   }
  
//   clean(...'bear'); 
// function clean(개똥){
//     console.log([...개똥].sort())
//   }
  
//   clean('bear');

  //8. 
//   function count(...rest2){
//     let letterA = [...rest2].filter(x => x==='a').length
//     let letterC = [...rest2].filter(x => x==='c').length
//     let letterB = [...rest2].filter(x => x==='b').length
//     let obj = {
//         a:letterA,
//         c:letterC,
//         b:letterB
//     }


//     console.log(obj)
//   }

//   count(...'aacbbb')

// function count(text){
//     let result = {};
//     [...text].forEach(a=>{
//         if(result[a] > 0) {
//             result[a]++
//         } else {
//             result[a] = 1
//         }
//     })
//     console.log(result)
// }

// count('aaappelsleaf')

// class Mchn {
//     constructor(a, b) {
//         this.name = a;
//         this.price = b;
//         this.money = function () {
//             console.log(this.price * 0.1);
//         };
//     }
// }

// let product = new Mchn('shirts', 50000)

// console.log(product.money())


// function Ele(a,b) {
//     this.name = a
//     this.age = b
//     this.sayHi = function(){
//         console.log(`안녕나는${this.name}이야`)
//     }
// }

// const person1 = new Ele('Kim', 20)
// const person2 = new Ele('Ki', 2)
// const person3 = new Ele('K', 10)

// person1.sayHi()

let arr = [1,2,3]
let superArr = [3, 4, 5, 6, 7, 8, 3]



arr.__proto__.remove3 = function(num) {
    if(this.includes(num)) {
        let filteredAry = this.filter(e => e !== num)
        console.log(filteredAry)
    }
}

superArr.remove3(3)