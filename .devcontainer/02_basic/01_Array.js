// Array

const myArray = [1, 2, 3, 4 ]
const myHeors = ["anu", "anushka"]

const myArray2 = new Array(1, 2, 3, 4)

//console.log(myArray[0]);


// Array methods

// myArray.push(5)
// myArray.push(9)
// myArray.pop()

myArray.unshift(9)
myArray.shift()

//console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);


// slice, splice
//console.log("A", myArray);

const myn1 = myArray.slice(1, 3)

// console.log(myn1);
// console.log("B", myArray);

const myn2 = myArray.splice(1, 2)
//console.log(myn2);




//++++++++++++++++ 2 part +++++++++++++++++++++++++++++++++


const sub = ["maths", "sci", "biology", "hindi"]
const game = ["cricket", "badmithon", "footboll", "voveyboll"]

sub.push(game)

// console.log(sub);
// console.log(sub[4][1]);

// concat 
sub.concat(game)
//console.log(sub);
//console.log(sub[4][1]);

//speard
const all_new = [...sub, ...game]
//console.log(all_new);


const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_array = another_Array.flat(Infinity)
//console.log(real_another_array );


console.log(Array.isArray("anu"))
console.log(Array.from("anu"))
console.log(Array.from({name: "anu"}))  //interesting