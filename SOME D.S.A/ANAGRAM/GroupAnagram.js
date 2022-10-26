// function GroupAnagram(a){
//     let obj = {}

//     a.map(i =>{
//         let cur = i; //Here we stored the array element
//         let sorted = i.split('').sort().join('');
//         if(!obj[sorted]){
//             obj[sorted] = [cur];
//         }
//         else{
//             obj[sorted].push(cur)
//         }

//     })  
//     return Object.values(obj)
//     }        



// let input = ['eat','tea','tan','ate','nat','bat']
// console.log(GroupAnagram(input));


function GroupAnagram(a) {
    let mj = {}
    a.map(i => {
        let data = i;
        let sortedData = i.split('').sort().join('');

          !mj[sortedData] ?  mj[sortedData] = [data] :  mj[sortedData].push(data);
    })

    return Object.values(mj)
}



let input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(GroupAnagram(input));
