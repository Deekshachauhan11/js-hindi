const name = "anu"
const repoCount = 50

//console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);


const gameName = new String ("Deeksha-ch")

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("k"));


console.log(gameName.substring(0, 4));
console.log(gameName.slice(-8, 4));


const newStringOne = "   deeksha   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deeksha.com/deeksha%10chauhan"

console.log(url.replace("%10", "_"));

console.log(url.includes("deeksha"));

console.log(gameName.split("_"));