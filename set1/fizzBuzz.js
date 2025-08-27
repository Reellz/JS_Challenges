/* Write a function named fizzBuzz that takes in two(2) parameters which
are expected to be strings. The function should return the string Fizz if
the combined length of the parameters is divisible by 3, the string Buzz
if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
3. */

// 1. create function
// 2. assign name to function
// 3. set 2 parameters for function
// 4. create variable to get total length of strings
// 5. use conditional logic to divide length of strings
// 6. return the string Fizz if the combined length of the parameters is divisible by 3
// 7. return the string Buzz if the it is divisible by 5

function fizzBuzz(str1, str2) {
    let totalLength = String(str1).length + String(str2).length

    if (totalLength % 3 === 0 && totalLength % 5 === 0){
        return "FizzBuzz";
    }
    else if (totalLength % 3 === 0){
        return "Fizz";
    }
    else if (totalLength % 5 === 0){
        return "Buzz";
    }
    else {
        return totalLength;
    }
}
console.log(fizzBuzz("share", "teen")) 
// "Fizz" because "shareteen" has 9 letters (9 % 3 === 0)

console.log(fizzBuzz("hello", "world")); 
// "Buzz" because "helloworld" has 10 letters (10 % 5 === 0)

console.log(fizzBuzz("javascript", "rocks")); 
// "FizzBuzz" because "javascriptrocks" has 15 letters (15 % 3 === 0) (15 % 5 === 0)
