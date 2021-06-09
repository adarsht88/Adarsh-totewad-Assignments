function isEven(x){
    return (x%2==0);
  }
  
  function findD(arr,test){
    for ( i = 0; i < arr.length; i++) {
      var res=isEven(arr[i]);
      if(res === true) {
        return arr[i];
        break;
      }
    }
  }
  
  var test = isEven();
  
  console.log(findD([3,4,5,7],test));
  