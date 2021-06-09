function rectangle(){
      this.width=20;
      this.height=20;
    
    }
    
    const r1=new rectangle();
    const r2=new rectangle();
    rectangle.prototype.getArea = function() {
      console.log(this.width*this.height);
    }
    
    r1.getArea();
    r2.getArea();
    