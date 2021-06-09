
let numbers = [8,9,15,300,370,371];
class Armstrong {
    getNextArmstrong(numbers){
        for(let number in numbers){
            let numberOfDigits = i.toString().length;
            let sum = 0;
            let temp = i;
            while (temp > 0) {
                let remainder = temp % 10;
                sum += remainder ** numberOfDigits;
                temp = parseInt(temp / 10); 
                if (sum == number) {
                    console.log(`Next Armstrong Number is : ${number}`)
                }
            }
        }
    }
}

let a = new Armstrong();
a.getNextArmstrong(numbers);
