// In this we'll see one difference between Object litrals and Object Create.
// Object litrals..!

let obj = {
    fname: "Mj",
    lname: "virus"
}
delete obj.fname;
console.log(obj.fname)

// Object.create()..!

let obj2 = Object.create({
    fname: "Mj",
    lname: "virus"
})

delete obj2.fname;
console.log(obj2.fname)

// Here you can see one difference between Object litrals and create,
// that which is created with Object litral is deleted While which is
// created with Object create is not deleted________________________#

