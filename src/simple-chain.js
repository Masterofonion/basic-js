const CustomError = require("../extensions/custom-error");

const chainMaker = {
  val: [],
    
  getLength() {
    
    return this.val.join('~~').length;
  },
  addLink(value) {
    console.log(value);  
    value = String(value);
    if (value) {
        this.val.push(`( ${value} )`);
    } else {
        this.val.push ('( )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
        this.val.length = 0;
        throw 'Error';
    } 
    if (position < this.val.length && position == Math.round(position)) {  
        this.val.splice(position - 1, 1);
        return this;
    } else {
        this.val.length = 0;
        throw 'Error';
        
    }
  },
  reverseChain() {
    this.val = this.val.reverse();  
    return this;
    
  },
  finishChain() {
    let res = this.val.join('~~').trim();
    this.val.length = 0;
    return res;  
  }
};

module.exports = chainMaker;
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
////
//console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())

////console.log(chainMaker.getLength());
//console.log(chainMaker.addLink(function() {}).finishChain());
//console.log(String(null));
