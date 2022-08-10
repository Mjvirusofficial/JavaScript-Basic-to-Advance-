console.log("Me: I love you promise❤️")
for(let i = 1; i <= 5; i++){
  setTimeout(() =>{
    console.log(i,"sec 😀")
  },i*1000)
}

setTimeout(() =>{
 console.log("Promise: Majak kr rhy thy🙄")
},14000)

setTimeout(() =>{
 console.log("Promise: Love you too ley tmko lgta h hm naa krenge tm bahut @chy ho tmsy jo v frndship krega hmesha happy rahyga😘")
},16000)

setTimeout(() =>{
 console.log("Me: 😊")
},19000)



function promise(){

return new Promise((accept,reject) => {
  setTimeout(() => {
    const love = false;
    if(!love)
      {
        console.log("Promise: I love you too Mj😳")
        accept();
      }
    else
      {
        console.log("Promise: sakal dekha h apna😂")
        reject();
      }
  },7000)
})
}

promise().then(() => {
 setTimeout(() =>{
console.log("Me: I love you 1Million promise🤩")
setTimeout(() => {
  console.log("Me: Uummmhaaa😘")
},1000)
   
    setTimeout(() => {
  console.log("Me: Ummmhhhaaa😘")
},2000)
   
     setTimeout(() => {
  console.log("Me: Uummmhhhhhaaaaaa😘\n")
},3000)
    
},2000)
}).catch(() => {
setTimeout(() =>{
 console.log("Me: Tor nani k🖕")
},3000)
})
