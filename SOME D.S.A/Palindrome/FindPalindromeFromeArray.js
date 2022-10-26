function FindPalindromeFromeArray(a){
a.map(i => {
    let serilItem = i.toString().split('').join('');
    let reverseItem = i.toString().split('').reverse().join('')
    
    let newArray = []
    if(serilItem === reverseItem){
        newArray.push(i)
        console.log(newArray)
    }
})
}

let array = [121,562,101,892,364]
FindPalindromeFromeArray(array)