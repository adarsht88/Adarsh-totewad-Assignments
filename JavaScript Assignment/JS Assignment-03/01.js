function rectangle(){
      this.width=20;
      this.height=20;
    
}
    
var r1=new rectangle();
console.log(r1.width);
rectangle.width=50;
console.log(rectangle.width);