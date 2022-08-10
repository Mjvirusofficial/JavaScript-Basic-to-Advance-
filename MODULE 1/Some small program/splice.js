// Splice method remove the element of array, It's directly applied on array
// Not need to create any second varriable which stored the splice value....
// It can add also new elements in exixting array__________________________#

function SpliceInArray(a){
    
    a.splice(3,5,1,2,3,4,5) // it remove after 3 index and add new element
    a.splice(0,3)
    console.log(a)
    }
    
let a = [4,3,6,82,32,22,65,90]
SpliceInArray(a)
    