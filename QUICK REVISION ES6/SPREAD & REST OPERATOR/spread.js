console.log("Spread use in Array & Object to the whole\nElement in new Array____________________#\n")
let a = ['Audi','Honda','BMW']
let b = ['Rolls Royce',...a] 
console.log(b)

console.log("\nObject:-")
let obj = {
    Fname: "Mj"
}

let obj2 = {
    ...obj,
    Lname: "virus"
}
console.log(obj2)

function sum(...name){
    return name;
}

console.log(sum('Deepak','Mj','virus',7061335711))