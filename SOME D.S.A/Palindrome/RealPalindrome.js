function Palindrome(n){

    if(n >= 0 && n <= 9){
        return true;
    }

    else{
        const num = n;
        const rev = 0;

        while(n >= 9){
            rev = (rev * 10) + (num % 10)
            
        }
    }
}

console.log(Palindrome(50))