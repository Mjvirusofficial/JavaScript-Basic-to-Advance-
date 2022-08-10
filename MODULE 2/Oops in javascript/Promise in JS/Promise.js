function student(res){
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
    if(res >= 40){
        resolve("Teacher: you pass on your exam.")
    }

    else
    {
        reject("Teacher: you fail on your exam.")
    }
        
    },2000)
    })
}

student(30).then((p) =>{
  console.log(p)
}).catch((f) =>{
  console.log(f)
})