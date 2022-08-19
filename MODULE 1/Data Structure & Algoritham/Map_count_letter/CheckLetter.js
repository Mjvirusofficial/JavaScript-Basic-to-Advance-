function CheckLetter(string,element){
let count = 0;
for(let i in string){
    if(element === string[i]){
        count++;
    }
}
console.log(element+" in your string occuring:- ",count," times.")
}

CheckLetter("KinaSonaTujhyRabNeyBnaya","a")