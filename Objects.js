// let mySym =  Symbol("user1")



// let myUser = {
//     name: "ali",
//     age: 18,
//     location: "etc",
//     [mySym]: "user1",
//     email: "hsghag@google.com",
//     isogedin: false
// }

// // console.log(myUser.age);

// // console.log(myUser["name"]);
// // console.log(myUser[mySym]);

// myUser.name = "abd"
// console.log(myUser.name);
// // Object.freeze(myUser);
// // myUser.name = "kjkasjldk"
// // console.log(myUser.name);



// myUser.greeting = function(){
//     console.log(`hello world this is my new object and its name is ${this.name}`);
// }
// // console.log(myUser.greeting());


// const course = {
//     courseName: "js",
//     price:2120,
//     courseInstructor:"bnsnb"
// }



// const newUser = new Object()
const newUser = {}

newUser.name = "ali"
newUser.age = 23
newUser.isloggedIn = false

// console.log(newUser);


const regularUser = {
    email: "email@jahdj.com",
    fulName: {
        firstName: "ali",
        lastName: "yes"
    }

}


// console.log(regularUser.fulName.lastName)


// const user1 = {1:"a", 2:"b"}
// const user2 = {3:"c", 4:"d"}
// const user3 = {5:"e", 6:"f"}

// const user4 = Object.assign({},user1,user2,user3)

// console.log (user4);

console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('islogged'));