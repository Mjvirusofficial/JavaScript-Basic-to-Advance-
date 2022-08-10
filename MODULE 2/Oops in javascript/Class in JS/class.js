class Mjvirus{
    constructor(name,age){
    this.n = name;
    this.a = age;
    }

    virus(){
        console.log(`Hey ${this.n},\nYou are ${this.a} years old.`)
    }
}

let Mj = new Mjvirus("Deepak",18)
Mj.virus()