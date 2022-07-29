console.log("Hey, hii this is Mjvirus#\nWelcome to my new program\n")
let a = prompt("Enter any nuber to check your number is a perfect square or not:-")
let b = 1, c;


for(b=1; b<=a; b++)
{
   if (b*b == a)
   {
       c = 1;
   }
}

if (c==1)
{
    console.log(a+" :- is a perfect square..!")
}

else
{
    console.log(a+" :- is not a perfect square..!")
}