//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 123455678900948278675656n

// Non-primitive/ Reference

// Array, Objects, Functions

const heros = ["Deeksha", "anu", "raj"]
let myObject ={
    name: "anu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);

// JavaScript is a dynamic language. It allows for dynamic typing, meaning variables can hold values of any type and can change types at runtime. This flexibility is a key characteristic of dynamic languages.