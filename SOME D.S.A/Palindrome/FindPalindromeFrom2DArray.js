function FindPalindromeFrom2DArray(a){

    a.map(i => {
        i.map(j => {
            let serilItem = j.toString().split('').join('')
            let reverseItem = j.toString().split('').reverse().join('')
 
            let newArray = []
            if(serilItem === reverseItem){
                newArray.push(j)

                // var twoDArray = []
                // twoDArray.push(newArray)
                console.log(newArray)
            }
        }) 
    })
}

let array = [
    [101,522,544,454],
    [589,898,333,786],
    [512,111,362,459]
]

FindPalindromeFrom2DArray(array)


