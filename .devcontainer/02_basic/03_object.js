const tinderUser = new Object() //this is sngliton object
//const tinderUser = {} //this is not a sngliton object

tinderUser.id = "123def"
tinderUser.name = "aanu"
tinderUser.isLoggedIn = true
//console.log(tinderUser);


const regularUser = {
    email: "anu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anu",
            lastname: "chanhan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


const obj = {1: "a", 2: "b"}
const obj1 = {3: "a", 4: "b"}

//const all = {...obj, ...obj1}
//const all  = { obj, obj1}
const all  = Object.assign({}, obj, obj1)
//console.log(all);



const users = [
    {
        id: 1,
        email: "anu@gmail.com"
    },
    {
        id: 1,
        email: "anu@gmail.com"
    },
    {
        id: 1,
        email: "anu@gmail.com"
    },{
        id: 1,
        email: "anu@gmail.com"
    }

]

users[1].email
console.log(tinderUser);

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));