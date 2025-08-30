/* Write a function named twoSum which takes two parameters: nums
and target. Given an array of integer nums and an integer target, return
indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you
may not use the same element twice. */

// 1. Create a function
// 2. Loop through the array 
// 3. Check with conditional logic
// 4. return indices
function twoSum(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

const numbers = [5, 12, 8, 130, 44];
console.log(twoSum(numbers, 13))
