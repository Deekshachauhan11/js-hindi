// function addTwoNumber (num1, num2){
//     console.log(num1 + num2);
    
// }
function addTwoNumber (num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
addTwoNumber(7, 8)

const result  = addTwoNumber(3, 5)
//console.log("Result:", result);



function loginUserMessage(username = "anu"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage("annu"))
//console.log(loginUserMessage("deeksha"))


// Shopping Cart
function calculateCardPrice(...num1){
    return num1
}
//console.log(calculateCardPrice(200, 300, 400));


const user = {
    username: "anu",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "Deeksha",
    price: 499
})


const myNewArray = [200, 300, 400, 700]

function returnSecondValue(getArray){
      return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 700]));