var a = prompt("Enter first number:- ")
var b = prompt("Enter second number:- ")
for(var i = 1; i <= a && i <= b; i++)
{
    if(a % i == 0 && b % i == 0)
    {
        var Hcf = i;
    }
}

console.log(`The HCF of ${a} and ${b} is:- ${Hcf}`)

