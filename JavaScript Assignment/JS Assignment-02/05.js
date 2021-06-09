function printP(arr)
{     
      var len = arr.length;
      var res = arr.slice(i, i+1);
      var res1 = isEven(res);
        if(res1 === true) {
          console.log(res)[0];
        }
        count = count +1;
        if(count <= len){
          i= i+1;
          printP(arr);
        }
}


function isEven(x){
  return (x%2==0);
}


var i = 0;
var count =0;
console.log(printP([1,3,4,5,6]));
