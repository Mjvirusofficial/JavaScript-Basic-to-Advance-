// Question is:- 
// 2.Find the SumOfZero in an array and return those element into 
// new array that sum is equal to equal to 0____________________# 

// In previous program we take two loop that time complexicity have
// O(n2) So, this time we tried to make this program 
// with O(n) time coplexicity______________________#

// Input is:-  [1,2,3,4,-2,5]
// Output is:- [2,-2]

// let's start_____________________________________________#


let SumOfZero = (a,l,r) =>{
    while(l < r)
    {
        sum = a[l] + a[r]
        if(sum === 0)
        {
            return [a[l],a[r]]
        }

        else if(sum > 0)
        {
           r--;
        }

        else
        {
            l++;
        }
    }
}

let a = [1,2,3,4,-2,5]
console.log(SumOfZero(a,0,a.length-1))