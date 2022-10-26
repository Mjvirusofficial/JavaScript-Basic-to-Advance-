function printPrimeNO(s,e){
    for(let i = s; i < e; i++){
        prime = false;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                prime = true;
                break;
            }
        }

        if(prime === false){
            console.log(i)
        }
    }
}


printPrimeNO(10,20)