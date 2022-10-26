function SelectionSort(a){
     /* Selection Sort is a sorting algoritham which arrange the n 
     number or array element by placing the smallest element in proper position. */

    for (let i = 0; i < a.length-1; i++) {
        let min = i;
        for(let j = i+1; j < a.length; j++){
            if(a[j] < a[min]){
                min = j;
            }
        }

        let swap = a[i]
        a[i] = a[min] 
        a[min] = swap;
    }

    console.log(a)
}

let a = [5,3,2,7,8,4,9,6,1]
SelectionSort(a)