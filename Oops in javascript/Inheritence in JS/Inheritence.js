// In inheritence, One class accessing the all properties 
// of another class by using extend keyword_____________#

class parent{
    constructor(name,age){
    this.Name = name;
    this.Age = age;
    }
}

class child extends parent{
    Display(){
        console.log(`Hey ${Name},\n Your are ${Age} years old.`)
        // See, here this class access the all properties of own parent class
    }
}

obj = new child("Mj virus",18)
console.log(obj)




