// Step -> Divide a single into single element#
// Step -> Merge all the single element into a single 
// Array in sorted formate__________________________#

// let's start...!
function StartDividing(a,l,r){
  if( l >= r)
  {
      return;
  }
  
  let m = l + parseInt(Math.floor(r-l)/2)
  StartDividing(a,l,m)
  StartDividing(a,m+1,r)
  MergeSort(a,l,m,r)
  return a;
  }
  
  function MergeSort(a,l,m,r){
  let a1 = new Array((m-l)+1)
  let a2 = new Array(r-m)
  
  for(let i = 0; i < (m-l)+1; i++ ){
      a1[i] = a[i+l]
  }
  
  for(let j = 0; j < r-m; j++ ){
      a2[j] = a[j+m+1]
   }
  
  let i = 0, j = 0, k = l;
  
  while(i < a1.length && j < a2.length){
      if(a1[i] < a2[j])
      {
          a[k] = a1[i]
          i++;
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
  
  let a = [5,7,8,9,4,6,1,3,2,10]
  console.log(StartDividing(a,0,a.length-1))
