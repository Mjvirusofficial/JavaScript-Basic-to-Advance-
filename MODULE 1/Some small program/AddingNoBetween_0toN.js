// Created by mjvirusofficial

var j = prompt("Enter number to print addition in loop:-")
var i=0;
var sum=0;
for(i=0; i<=j; i++)
{
    sum = sum+i;
    document.write(i+" + ")
}

document.write(" =\n"+sum);