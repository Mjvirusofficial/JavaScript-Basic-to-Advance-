let str = prompt("Enter any string:-")
console.log("You entered:- "+str)
console.log("Reverse of your string is:- ")

let slen = str.length;

for(let i = slen-1; i>=0; i--)
{
    console.log(str[i])
}

