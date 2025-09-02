/* Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct.​ */

/*
1. Define a function that accepts the array.
2. Create a way to track seen numbers.
3. Loop through each element:
   - If the element is already in your memory box → return true.
   - Otherwise, add it to the memory box.
4. If the loop finishes with no repeats found → return false. */

function hasDuplicate(array){
    const seen = new Set()

    for (const x of array){
        if (seen.has(x)){
            return true
        }else{
            seen.add(x)
        }
    }
    return false
}

console.log(hasDuplicate([1, 2, 3, 4, 5]));
console.log(hasDuplicate([3, 2, 3]));