// Question is:- 
// 1.Find the SumOfZero in an array and return those element
// into new array that sum is equal to equal to 0__________# 

// Input is:-  [1,2,3,4,-2,5]
// Output is:- [2,-2]

// let's start_____________________________________________#

let SumOfZero = (a) =>{
    for(let i = 0; i < a.length; i++){
        for(let j = i+1; j < a.length; j++)
        {
            if(a[i]+a[j] === 0)
            {
                return [a[i],a[j]]
            }
        }
    }
}

let a = [1,2,3,4,-2,5]
console.log(SumOfZero(a))