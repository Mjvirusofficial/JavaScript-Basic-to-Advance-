// Question is:- 
// 1.Program to convert 1D Array into 2D Array.
// Step 1:- Create a functon take 3 paramenter(a,rowSize,colSize)
// Step 2:- Take k varriable & initilised with 0 and also take new 
// array_________________________________________________________#

// Step 3:- Iterate two loop i and j in first loop iteration 
// store rowSize into new Array that creted________________#

// Step 4:- After in 2nd loop store input array in Two_DArray.



function OneD2TwoD(a,row,col){
let k = 0;
let TwoD_Array = new Array()
   
   for(let i = 0; i < row; i++)
   {
     TwoD_Array[i] = new Array(row)
     for(let j = 0; j < col; j++)
     {
        TwoD_Array[i][j] = a[k]
        k++;
     }
   }
   return TwoD_Array;
}

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(OneD2TwoD(a,2,5))