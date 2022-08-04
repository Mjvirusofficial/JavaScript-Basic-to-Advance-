// How to access a Prototype in JavaScript? || ########### 3 August 2022 ###############
// Prototype can be access as a constructorFunction.prototype in of Constructor function
// And __proto__ in case of object_____________________________________________________#

function Mj(name){
    this.n = name;
 }
 console.log(Mj.prototype)

 let Mjvirus = new Mj("Deepak")
 console.log(Mjvirus.__proto__)