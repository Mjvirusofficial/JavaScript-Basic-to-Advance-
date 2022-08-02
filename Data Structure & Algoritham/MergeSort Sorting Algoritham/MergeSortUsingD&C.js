// Step -> Divide a single array into singe element
// Step -> Merge all single element into a single 
// array in sorted order________________________#

// let's start...!

function startDividing(a,l,r){
    if(l < r)
    {
    let m = l + parseInt((r-l)/2)
    startDividing(a,l,m)
    startDividing(a,m+1,r)
    mergeSort(a,l,m,r)
    return a;
  }
}  
  
  let mergeSort = (a,l,m,r) =>{
    let a1 = new Array((m-l)+1)
    let a2 = new Array(r-m) //(r-m+1)+1
    
    for(let i = 0; i < (m-l)+1; i++){
      a1[i] = a[i+l]
    }
    for(let j = 0; j < r-m; j++){
      a2[j] = a[m+1+j]
    }
    
    let i = 0, j = 0, k = l;
    while(i < a1.length && j < a2.length){
    if(a1[i] < a2[j])
      {
        a[k] = a1[i]
        i++
      }
    else
      {
        a[k] = a2[j]
        j++
      }
      k++
    }
    
    while(i < a1.length){
      a[k] = a1[i]
      i++
      k++
    }
    
    while(j < a2.length){
      a[k] = a2[j]
      j++
      k++
    }
  }
  
  let arr = [50,80,40,20,10,60,95,90,30,70]
  console.log(startDividing(arr, 0 , arr.length-1))
