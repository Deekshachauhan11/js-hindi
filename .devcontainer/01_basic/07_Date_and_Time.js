// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


// The typeof Date is object
//let myCreatedDate = new Date(2024, 0, 24, 5, 3)
//let myCreatedDate = new Date(2024, 0, 24)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());

let date = new Date(2024, 0, 24, 5, 7)
//console.log(date.toLocaleString());


let myTimeStamp = Date.now()
// console.log( myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString("default", {
    weekday:"long"
})