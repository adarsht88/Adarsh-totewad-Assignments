
function rectangle(width,height){
      this.width=width;
      this.height=height;
    
    }
    
    const r1=new rectangle(4,5);
    rectangle.prototype.getArea = function() {
      console.log(this.width*this.height);
    }
    r1.getArea();
    r1.height=50;
    const r2=new rectangle();
    
    r1.getArea();
        
        