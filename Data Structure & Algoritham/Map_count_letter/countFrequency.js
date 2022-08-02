let a = ["abc","pqr","abc","pqr"]
let map = {}
a.map(i => map[i] = map[i]+1 || 1)
console.log(map)
