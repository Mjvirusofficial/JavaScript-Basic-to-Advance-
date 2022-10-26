function BubbleSort(a) {
 /* Bubble Sort is a sorting algoritham which arrange the n 
 number or array element by placing the bigest element in proper position. */

for (let i = 0; i < a.length-1; i++) {
    for (let j = i+1; j < a.length; j++) {
        if(a[i] > a[j]){
            let swap = a[i]
            a[i] = a[j]
            a[j] = swap;
        }
    }
}    
    console.log(a)
}

let a = [5,3,2,7,8,4,9,6,1]
BubbleSort(a)

