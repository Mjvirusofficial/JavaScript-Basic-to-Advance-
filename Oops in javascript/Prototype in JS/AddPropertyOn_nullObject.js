function Mj(name){
this.name = name;
console.log(this.name)
}

let obj = new Mj("Deepak")
console.log(Mj.prototype.__proto__)
Mj.prototype.__proto__.Age = 18;
console.log(Mj.prototype.__proto__) // See, here end...! || lets's do this console.

