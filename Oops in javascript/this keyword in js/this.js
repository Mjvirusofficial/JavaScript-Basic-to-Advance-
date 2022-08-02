// When we stored this into a container it gives as {} | Object.
var demo = this;
console.log(demo);

// But when we stored this keyword inside a function
// Then why its give undefined;

// "use strict"
// function Demo(a) {
//     a = this;
//     return a;
// }
// console.log(Demo());


