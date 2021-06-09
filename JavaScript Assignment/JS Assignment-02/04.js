function squareD(x){
    return (x*x);
  }
  function map(arr,test){
    for(i=0;i<arr.length;i++){
      var res = squareD(arr[i]);
      newArr.push(res);
    }
    return newArr;
  }
  var newArr = [];
  
  var test = squareD();
  console.log(map([1,2,3,4],test));