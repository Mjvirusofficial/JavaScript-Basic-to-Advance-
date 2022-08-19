function CountELement(a){
let map = {}
a.map(i => map[i] = (map[i] || 0)+1)
console.log(map)
}

let a = [1,2,2,3,4,5,4,5]
CountELement(a)

