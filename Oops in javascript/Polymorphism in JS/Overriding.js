class virus{
    MyName(name)
    {
      console.log("Name:- ",name)
    }
}

class Mj extends virus{
    MyName(name,cource)
    {
      console.log("Name:- ",name,"Cource:- ",cource)
    }
}

let obj = new Mj;
obj.MyName("Deepak Ravidas","F.E")