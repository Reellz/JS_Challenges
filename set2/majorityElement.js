/* Given an array nums of size n, return the majority element. The majority
element is the element that appears more than ⌊n / 2⌋ times. You may
assume that the majority element always exists in the array. */

/*
1. Define a function that takes an array as input.
2. Initialize a variable called 'candidate' to store a potential majority element.
3. Initialize a counter variable 'count' to 0.
4. Loop through each element in the array:
    - If count is 0:
        - Set candidate to the current element.
    - If the current element is equal to candidate:
        - Increment count by 1.
    - Else:
        - Decrement count by 1.
5. After the loop, the candidate variable holds the majority element.
6. Return candidate. */

function majorityElement(nums){
    let candidate = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        const currentElement = nums[i];

        if (count === 0){
            candidate = currentElement;
            count = 1;
        }else if (candidate === currentElement){
            count++;
        }else{
            count--;
        }
    }
    return candidate
}

const numbers = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(numbers))