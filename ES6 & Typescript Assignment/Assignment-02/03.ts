class Armstrong {
  getNextArmstrong(lowNumber:number,highNumber:number){
      for(let i = lowNumber; i <= highNumber; i++){
          let numberOfDigits = i.toString().length;
          let sum = 0;
          let temp = i;
          while (temp > 0) {
              let remainder = temp % 10;
              sum += remainder ** numberOfDigits;
              temp = parseInt(temp/ 10); 
              if(i<=1000){
                  if (sum == i) {
                      console.log(`Next Armstrong Number is : ${i}`)
                  }
              }else{
                  console.log(`Error: ${i} is beyound 1000.`)
              }
          }
      }
  }
}

let a = new Armstrong();
a.getNextArmstrong(1,10000);
