/*Prototype is a built-in properties of every javascript function and object.
Concept 1:- Every function/object in javascript has a built-in 
properties that is called prototype. */

function Person(name,age){
    this.n = name;
    this.a = age;
}

console.log(Person.prototype)

/*Concept2:- The prototype can be accessed as constructorFunction.prototype 
in case of Construtor function and object__proto__ in case of onject______#
*/

let person1 = new Person("Deepak",18)
console.log(person1.__proto__)

/*Concept3:- Use of prototype:- Add properties or methods on a constructor 
function and objects_____________________________________________________#
*/

Person.prototype.gender = "male";
console.log(person1)

Person.prototype.print = function(){
  console.log("Hello",this.n)
}

person2 = new Person('MJ virus')
person2.print()