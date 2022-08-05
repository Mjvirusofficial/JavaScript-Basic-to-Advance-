function protoChain(name){
    this.name = name;
    console.log(this.name)
}

let obj = new protoChain("MJ")
console.log(obj.__proto__)
console.log(obj.__proto__.__proto__)  // This is chain of prototype.
console.log(obj.__proto__.__proto__.__proto__) // Here, prototype will end becoz prototype with null value.
