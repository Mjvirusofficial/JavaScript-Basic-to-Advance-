class Overloading{
    Student(name){
        console.log("name:-",name)
    }

    Student(name,age){
        console.log("Name:-",name)
        console.log("Age:-",age)
    }
}

let obj = new Overloading()
obj.Student("Deepak",18)

