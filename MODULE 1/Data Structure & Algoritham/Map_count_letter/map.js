// Step 1: Create a function that takes a string.
// Step 2: Define a map{} in your program.
// Step 3: Iterate your string from StoE. 

function Maping(str){
    let map = {}
    for(i of str){
        map[i] = (map[i] || 0)+1
    }
    console.log(map)
}

Maping("Deepak")