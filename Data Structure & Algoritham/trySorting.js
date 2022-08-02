let a = [4,8,7,9,3,0,6,2,1,5]

// ##########Bubble_Sort##############
// function BubbleSort(a){
//     for(let i = 0; i < a.length-1; i++){
//         for(let j = i+1; j < a.length; j++){
//             if(a[i] > a[j])
//             {
//                 let mj = a[j]
//                 a[j] = a[i]
//                 a[i] = mj;
//             }
//         }
//     }
//       return a;
// }

// console.log(BubbleSort(a))


// ##########Selection_Sort##############

// function selectionSort(a){
//     for(let i = 0; i < a.length-1; i++){
//         let min = i;
//     for(let j = i+1; j < a.length; j++){
//         if(a[j] < a[min])
//         {
//            min = j;
//         }
//     }

//        let mj = a[i]
//        a[i] = a[min]
//        a[min] = mj;
//     }

//     return a;
// }

// console.log(selectionSort(a))



// ##########Insertition_Sort##############
// function insertitionSort(a){
// for(let i = 0; i < a.length; i++){
//     let se = a[i];
//     let j = i - 1;

//     while(j >= 0 && a[j] > se){
//       a[j+1] = a[j]
//       j--;
//     } a[j+1] = se;
    
// }  
// return a;
// }

// console.log(insertitionSort(a))