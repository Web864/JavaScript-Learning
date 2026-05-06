let mySym =  Symbol("user1")


 
let myUser = {
    name: "ali",
    age: 18,
    location: "etc",
    [mySym]: "user1",
    email: "hsghag@google.com",
    isogedin: false
}

console.log(myUser.age);

console.log(myUser["name"]);
console.log(myUser[mySym]);

myUser.name = "abd"
console.log(myUser.name);
// Object.freeze(myUser);
// myUser.name = "kjkasjldk"
// console.log(myUser.name);



myUser.greeting = function(){
    console.log(`hello world this is my new object and its name is ${this.name}`);
}
console.log(myUser.greeting());