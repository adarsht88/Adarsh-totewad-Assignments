function double2(x){
    return (x*x);
  }
  function square2(x){
    return (x*2);
  }
  
  
  function compositeValue(double,square,x){
    return double2(square2(x)) ;
  }
  var double = double2();
  var square = square2();
  console.log(compositeValue(double,square,5));
  