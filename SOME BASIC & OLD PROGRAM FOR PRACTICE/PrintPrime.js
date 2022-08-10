function PrintPrime(s,e){
    for(let i = s; i < e; i++){
    prime = 0;
    for(let j = 2; j < i; j++){ // for 5, its iterate 2,3,4;

        if(i % j === 0) // 5 % 2 === 0;,  5 % 3 === 0;,  5 % 4 === 0;,
        {
            prime = 1; 
        }
    }
    if(prime === 0)
    {
        console.log(i)
    }
    }
}

PrintPrime(5,20)