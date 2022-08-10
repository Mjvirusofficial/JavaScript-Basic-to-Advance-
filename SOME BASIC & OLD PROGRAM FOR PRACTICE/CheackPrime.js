function IsPrime(n){
    let p = "";
    for(let i = 2; i < n; i++)
    {
        if(n % i === 0)

        {
            p = `${n} its not a prime number.`
        }
            p = `${n} its a prime number.`

    }

    return p;
}

console.log(IsPrime(1))
console.log(IsPrime(0))
console.log(IsPrime(1))
console.log(IsPrime(9))
console.log(IsPrime(23))