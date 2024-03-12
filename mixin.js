class Mixin{
    constructor(Base){
        this.Base = Base
    }
    withMixins(...args){
        //
        return args.reduceRight((p,m)=>m(p),this.Base)
    }
}

function inherit(Base){
    return new Mixin(Base || class {});
}


var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

class Pegamento extends inherit().withMixins(calculatorMixin,randomizerMixin){

}

/*
  class{}
  class{}+randomize
  class{}+randomize+calculator
*/
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}