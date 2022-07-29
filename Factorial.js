let a = prompt("Enter any number to find factorial:- ")
let fact = 1;
for(var i=1; i<=a; i++)
{
    fact = fact * i;
    document.write(i+"\n")
    
//console.log(`${i} \nx =\n ${fact}`)
    
}

document.write("\n= "+fact)
console.log(`The factorial of ${a} is ${fact}`)