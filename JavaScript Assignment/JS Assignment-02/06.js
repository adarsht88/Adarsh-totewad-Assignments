function printP(arr)
{     
      var len = arr.length;
      var res = arr.slice(i, i+1);
      var res1 = squareD(res);
      var result = newarr.concat(res1);
      count = count +1;
      if(count <= len){
        i= i+1;
        newarr = result ;
        printP(arr);
      }
  return newarr;
}

function squareD(x){
  return (x*x);
}
var newarr = [];
var i = 0;
var count =0;
console.log(printP([1,2,3,4]));