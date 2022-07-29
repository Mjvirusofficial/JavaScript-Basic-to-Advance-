// Question is:- 
// 1.Print SpiralForm of this 2D Array or matrix.
// Input is:-    
// [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5],
// ] 

// Output is:- 
// 1
// 2
// 3

// 4
// 5
// 6

// 7
// 8
// 9

let SpiralForm = (a) =>{
let row = 0, lrow = a.length-1;
let col = 0, lcol = a[0].length-1;

while(row <= lrow && col <= lcol){
   for(let i = col; i <= lcol; i++)
   {
      console.log(a[row][i])
   } 
   row++;

   for(let i = row; i <= lrow; i++)
   {
      console.log(a[i][lcol])
   } 
   lcol--;

   for(let i = lcol; i >= col; i--)
   {
      console.log(a[lrow][i])
   } 
   lrow--;

   for(let i = lrow; i >= row; i--)
   {
      console.log(a[i][col])
   } 
   col++;
   
}
}

let a = 
[
   [1,2,3],
   [8,9,4],
   [7,6,5]
] 

console.log("\nYour input is:-")
setTimeout(function(){
    a.forEach(i => {
        console.log(i)
    });
    console.log("\n")
    },1000)
    setTimeout(function(){
        
        console.log("Output of this program:- ")
        },2000)
         
setTimeout(function(){
    SpiralForm(a)
},3500)
