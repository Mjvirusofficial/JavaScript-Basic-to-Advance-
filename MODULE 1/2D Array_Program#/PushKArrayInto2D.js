function TwoDimensionalArray(a,b,c){
    let TwoD_Array = new Array()
    TwoD_Array.push(a,b,c)
    return TwoD_Array;     
}


let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]
console.log(TwoDimensionalArray(a,b,c))