// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         // console.log("5 is best number")
//     }
//     // console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//     // console.log(`outer loo value ${i}`)
//     for (let j = 0; j <=10; j++) {
//     // console.log(`outer loo value ${i} and ${j}`)
//     //    console.log(i + '*' + j + '=' + i*j);


//     }
//     const element = i;

// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("5 detected")
//         continue
//     }
//     console.log(`value of i is ${index}`);
// }



// let index = 0
// while ( index <= 20) {
//     console.log(`value of index is ${index}`);
//     index= index +2 
// }


// let myArr = ["flash", "ali", "sjd"]
// let arr = 0
// while (arr < myArr.length) {
//     console.log(`value is ${myArr[arr]}`)
//     arr = arr + 1
// }


// let score = 11

// do {
//     console.log(`score is ${score}`)
//     score++
// } while (score <= 10);

// const arr = [1,2,3,4,5]
// for (const e of arr) {
//     console.log(e);
// }

//  const greetings ="heloor word"
// for (const greet of greetings) {
//     console.log(   `each vhar of ${greet}`);
// }




// const map = new Map()

// map.set ('In', "india")
// map.set ('Pk', "Pakistan")


// // console.log(map);

// for (const [key,value] of map) {

//     console.log(key, value);

// }


// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apply'
// }

// for (const key in myObject) {
//     console.log(    `${key} shortcut is for ${myObject[key]}`);


// }


// const myCoding = [
//     {languageName : "javascript",
//         langaugeFileName: "js"
//     },
//     {languageName : "java",
//         langaugeFileName: "js"
//     },
//     {languageName : "python",
//         langaugeFileName: "js"
//     }
// ]


// myCoding.forEach( (item) =>{
//     console.log(item.languageName);
// } )



// let myArr = [1,2,3]


// const myTotal = myArr.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemNAme: "js course",
        price: 999
    },
    {
        itemNAme: "mobile",
        price: 900
    }
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);