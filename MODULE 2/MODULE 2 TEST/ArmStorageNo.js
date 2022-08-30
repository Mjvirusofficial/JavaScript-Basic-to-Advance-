const AmstrongNumber = (inp) => {
    let op = 0;

     //implement your  logic here - you dont have to return anything
     let temp = inp;
     while (temp > 0) {
         // finding the one's digit
         let remainder = temp % 10;
     
         op += remainder * remainder * remainder;
     
         // removing last digit from the number
         temp = parseInt(temp / 10); // convert float into integer
     }

    if (inp == op) {
                console.log(inp + " is an Armstrong number");
    }
    else {
                console.log(inp + " is not an Armstrong number");
    }
}

const inp = readline();
AmstrongNumber(inp);