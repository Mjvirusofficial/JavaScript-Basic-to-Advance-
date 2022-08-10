// We cannot access the class properties when its initilized with #
// But using a library function called getName() and setName() we 
// can access the private properties of a class_________________#

// let see this..!

// In very simple way

class simple{
    #name = "Deepak";

    getName(){
        return this.#name;
    }

    setName(n){
        this.#name = n;
    }
}

let simp = new simple()
console.log(simp.getName())

/*______________________________________________________________*/


// Using constructor...!
class Mj{
    #n
    constructor(name)
    {
        this.#n = name;
    }

    print()
    {
       console.log(this.n)
    }

    getName(){
        return this.#n
    }

    setName(name){
        this.#n = name
    }
}

let obj = new Mj("Mj virus")
console.log(obj.getName())