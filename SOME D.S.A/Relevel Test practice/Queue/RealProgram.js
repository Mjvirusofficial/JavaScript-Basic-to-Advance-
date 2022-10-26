function Sorting(a){
let step = 0;
let sorted = false;
while(sorted != true){
    sorted = true;
    for (let i = 0; i < a.length; i++) {
        if(a[i] == 1 && a[i+1] == 0){
            [a[i],a[i+1]] = [a[i+1],a[i]]
            i++
            sorted = false;
        }    
    }
    
    if(sorted == false){
        step++;
    }
    
}
return step;
}


let a = [1,0,0,0]
let result = Sorting(a)
console.log(result)