function doubleD(x){
    return (x*x);
  }
  function squareD(x){
    return (x*2);
  }
  function composeA(x){
    return doubleD(squareD(x)) ;
  }
  function composeB(x){
    return doubleD(squareD(x)) ;
  }
  
  console.log(composeA(5));
  console.log(composeB(5));