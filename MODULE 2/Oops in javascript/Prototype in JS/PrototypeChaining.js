// Prototype of a function...!

function Mj(name){
    this.name = name;
    console.log(this.name)
  }
  Mj.prototype // 1st prototype
  Mj.prototype.__proto__ // 2nd prototype
  Mj.prototype.__proto__.__proto__ // 3rd prototype is ending point
  

// Prototype of an Object...!
function protoChain(name){
    this.name = name;
    console.log(this.name)
}

let obj = new protoChain("MJ")
console.log(obj.__proto__)
console.log(obj.__proto__.__proto__)  // This is chain of prototype.
console.log(obj.__proto__.__proto__.__proto__) // Here, prototype will end becoz prototype with null value.
