// declare class
modeule.exports = class Shape{
    constructor(c){
       let color=c===undefined?"blue":c;
    }
  
  function drawShape(){
    console.log("draw the shape"); 
  }
  function calculateArea(){
   console.log("area is area"); 
  }
}


// export class using module.exports
