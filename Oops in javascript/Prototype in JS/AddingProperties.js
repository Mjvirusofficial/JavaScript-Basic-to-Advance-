// Uses of prototype...!
// You can add a properties or nethods on a constructor

function fun(name){
    this.name = name;
    console.log(this.name)
  }
  
 fun("Mj virus")

  // Adding new properties like class
  fun.prototype.age = 18;
  fun.prototype.class =  function(c){
    this.class = c;
    console.log(this.class)
  }
 fun("Deepak,10")
