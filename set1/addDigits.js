/* Given an integer num, write a function that repeatedly adds all its digits
until the result has only one digit, and return it. */

/* 
1. Start function `addDigits(num)`
2. While `num` has more than 1 digit:
    - Initialize `sum = 0`
    - Convert `num` into digits
    - For each digit in `num`:
     - Add digit to `sum`
    - Update `num = sum`
3. End loop when `num` is a single digit
4. Return `num` */

function addDigits(num){
    while(num >= 10){
        let sum = 0;
        let string = num.toString();

        for (let i = 0; i < string.length; i++){
        sum += Number(string[i]);
        }
        num = sum;
    }
    return num;
}

console.log(addDigits(38));  
console.log(addDigits(0));   
console.log(addDigits(9));   
console.log(addDigits(123)); 
console.log(addDigits(9999));
