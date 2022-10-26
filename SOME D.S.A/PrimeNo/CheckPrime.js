function FindLetterOccuring(n) {
let prime = ''
for(let i = 2; i < n; i++){
    if(n % i === 0){
       prime = 'Its not a prime number.';
       break;
    }

    else{
        prime = 'Its a prime number.';
    }
}
    console.log(prime)
}

FindLetterOccuring(9)
