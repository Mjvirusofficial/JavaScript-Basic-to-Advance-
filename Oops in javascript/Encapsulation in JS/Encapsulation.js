// let's Understamd Encapsulation in detail...!

let obj = {
    name : "Mj"
}

obj.name = "Mj virus"
console.log(obj.name)     // Here you can see the properties is change

// In Encapsuation Class can make properties private using # before 
//declare any properties__________________________________________#
// wait...!

class MyName{
#name = "Mj"
}

let obj1 = new MyName()
console.log(obj1.name)

// In next program you can see how to access the class properties 
// when its declare with #______________________________________#