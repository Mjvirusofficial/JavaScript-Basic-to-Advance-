function CheckAnagram(s1,s2){
//First we have to check the length of the strings

if(s1.length != s2.length){
    return false;
}

let obj = {}
for(let i of s1){
    obj[i] = obj[i]+1 || 1
}

for(let j of s2){
    if(!obj[j]){
        return false;
    }
    obj[j] -= 1;
    return true;
}
}

let s1 = 'care';
let s2 = 'race';
console.log(CheckAnagram(s1,s2));