function Partition(a,l,r) {
    let pivot = a[r];
    let i = l - 1;

    for (let j = 0; j < r-1; j++) {
         if(a[j] < pivot){
            i++;
            let mj = a[i]
            a[i] = a[j]
            a[j] = mj;
         }       
    }

    let virus = a[i+1]
    a[i+1] = a[r]
    a[r] = virus;

    return i+1;
}

let a = [5,3,2,7,8,1,9,6,4]
Partition(a,0,a.length-1)
console.log(a)