// const user = {
//     username: "ali",
//     price: 999,
//     welcomeMsg: function(){
//         console.log(`${this.username} ,Welcome to website`);
//         // console.log(this);
//     }
// }

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()


// console.log(this);



// function chai(){
//     let username = "ali"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "ali"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "ali"
//     console.log(this.username);
// }
// chai()


// 

// const addTwo = (num1,num2) =>     (num1 + num2)
const addTwo = (num1,num2) =>     ({username:"ali"} )



console.log(addTwo(3,4));