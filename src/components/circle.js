// import using require
var msg = require('./shape.js');
// declare class
module.exports=class Circle extends msg{
 constructor(...args){
  super(...args); 
 }
  function calculateArea(){
    console.log("2*pi*r"); 
  }
}

// export class using module.exports
