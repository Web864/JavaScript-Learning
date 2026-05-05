// const myArr = [0,1,2,3,4,5,6]


// const mtHeros = ["asd","ali"]
// const myArr2 = new Array("1,2,3,4,5")
// // console.log(myArr2);



// myArr.push(7)
// myArr.pop()



// myArr.unshift(9)
// myArr.shift()
// myArr.shift()





// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// console.log("a" , myArr);

// const myn1 = myArr.slice(1,4)
// console.log(myn1);
// console.log("b" , myArr);

// const myn2 = myArr.splice(1,4)
// console.log(myn2);
// console.log("c" , myArr);


const newArr = [12,3,43,45,4643,89]

const secArr = [3784,389483,2389281,8981]

const allArr = [...newArr, ...secArr]

// const allArr = newArr.concat (secArr)


// console.log(allArr);


const anotherArr = [1,2,3,4,[2,3,4,5,[45,34,34]]]

const spreadIt = anotherArr.flat(Infinity);



console.log(spreadIt);



console.log(Array.isArray("ali"))
console.log(Array.from("ali")) /// intresting



let score1 = 100
let score2 = 100
let score3 = 100



console.log(Array.of(score1,score2,score3));