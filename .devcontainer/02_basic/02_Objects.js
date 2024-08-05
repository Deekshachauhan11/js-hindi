// object literals 


const mySym = Symbol("key1")
const jsUser = {
    name:  "Anu",
    "last": "Chauhan",
    [mySym]: "key1",
    age: 22,
    location: "ghaziabad",
    email: "cdeeksha0011@gamil.com",
    isLogged: false,
    lastLogininDays: ["Monday", "Saturday"]
}

//console.log(jsUser[mySym]);

// to change value
jsUser.email = "anu@gmail.com"
// to freeze value
//Object.freeze(jsUser)


jsUser.greeting = function(){
    console.log("helloo js user");
}
jsUser.greetingTwo = function(){
    console.log(`helloo js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());