// import using require
var msg = require('./shape.js');
// declare class
module.exports=class Circle extends msg{
 constructor(...args){
  super(...args); 
 }
  calculateArea(){
    console.log("2*pi*r"); 
   return 10;
  }
}

// export class using module.exports
