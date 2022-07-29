// Question is:- 
// 1.Print WaveForm of this 2D Array or matrix.
// Input is:-    
// [
//   [1,6,7],
//   [2,5,8],
//   [3,4,9],
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

let WaveForm = (a) =>{
let lrow = a.length-1;
let lcol = a[0].length-1;

    for(let j = 0; j <= lcol; j++)
    { setTimeout(function(){

        if(j % 2 === 0)
        {
            for(let i = 0; i <= lrow; i++)
            {
                console.log(a[i][j])
            }

            console.log("")
        }

        else
        {
            for(let i = lrow; i >= 0; i--)
            {
                console.log(a[i][j])
            }
            
            console.log("")
        }
    },j*1000)
    }

}

let a = [
         [1,6,7],
         [2,5,8],
         [3,4,9],
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
    WaveForm(a)
},3500)
