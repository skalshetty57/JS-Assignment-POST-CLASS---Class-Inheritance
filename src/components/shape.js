// declare class
module.exports = class Shape{
    constructor(c){
       this.color=c===undefined?"blue":c;
    }
  
  drawShape(){
    console.log("draw the shape"); 
  }
  calculateArea(){
   console.log("area is area"); 
      return 1;
  }
}


// export class using module.exports
