function InsertionSort(a) {
     for (let i = 1; i < a.length; i++) {
        let insert = a[i]
        let j = i - 1;
        
        while(j >= 0 && a[j] > insert){
            a[j+1] = a[j]
            j--
        }

        let mj = a[j+1]
        a[j+1] = insert
        insert = mj; 
     }

     console.log(a)
}

let a = [5,3,2,7,8,4,9,6,1]
InsertionSort(a)