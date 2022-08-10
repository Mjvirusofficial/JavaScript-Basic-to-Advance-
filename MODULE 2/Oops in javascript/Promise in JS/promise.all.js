let p1 = Promise.resolve(123)
let p2 = "Mj_virus";
let p3 = new Promise((resolve,reject) =>{
    setTimeout(() => {
    let a = 5;
    if(a === 4){
        resolve("All are true.")
    }

    else{
        reject("False")
    }
    
    },2000)
})

Promise.all([p1,p2,p3]).then((t) => {
   console.log(t)
}).catch((f) => {
   console.log(f)
})