var mj = {
    name:"Mj",
    age: 18
}

//Simple console the object key values.
console.log(mj)

//Access the value
console.log(mj.age)

//Access the value using Destructure.
let {name,age} = mj;
console.log(name,age)

//Access the value using spread operator.
console.log({...mj})

//Access the value using loop.
for(let i in mj){
    console.log(mj)
}

