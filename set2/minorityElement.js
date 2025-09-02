/* Given a non-empty array of integers nums, every element appears
twice except for one. Find that single one.​ */

/*
1. Define a function that takes an array `nums` as input.
2. Initialize a variable `single` to 0 (this will store the single element).
3. Loop through each element `num` in `nums`:
   - Update `single` by performing an XOR between `single` and `num`.
4. After the loop, `single` contains the element that appears only once.
5. Return `single`. */

function minorityElement(nums){
    let single = 0;

    for (let i = 0; i < nums.length; i++){
        single = single ^ nums[i]
    }
    return single
}

console.log(minorityElement([2, 2, 1]));
console.log(minorityElement([4, 1, 2, 1, 2]));
console.log(minorityElement([1]));
