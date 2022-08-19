function iterator(n){
    let index = 0;
    return {
        next: function(){
            if(index <= n){
                index++
                return {value: index , done:false}
            }
            else return {value: undefined , done:true}
        }
    }
}

let result = iterator(10)
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())


For Array____________#

function iterator(a){ 
let count = 0;
return {
    next: function(){
    if(count < a.length){
        return {value: a[count] , done: false }
    }
    else{
        return {value: undefined , done: true }
    }
}
}
}

let i = iterator([5,1,2,3,4])
console.log(i.next().value)