//var c = 300
let a  = 300
if (true) {
    let a = 10
    const b = 20
    console.log("inner:", a);
    
}
console.log(a);
// console.log(b);
//console.log(c);


//nested scope
function one(){
    const username = "anu"

    function two(){
        const website = "youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two()
}
one()


if (true){
    const username = "deeksha"
   if (username  === "deeksha"){
        const website = " youtube"
        //console.log(username + website);
}
   //console.log(website);
   
}
//console.log(username);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(6))
function addone (num){
    return num + 1
}

addtwo(6)
const addtwo = function (num){
    return num  + 2
   
}



