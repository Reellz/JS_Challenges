/*
1. Define a function that takes an array as a parameter.
2. Initialize three empty lists:
   - `evens` → to store even numbers.
   - `odds` → to store odd numbers.
   - `chars` → to store single-character strings.

3. Loop through each element in the array:
   - If the element is a number and divisible by 2, add it to `evens`.
   - Else if the element is a number and not divisible by 2, add it to `odds`.
   - Else if the element is a string and of length 1, add it to `chars`.

4. Define a Bubble Sort function that takes a list as input:
   - Repeat until no swaps are needed:
     - Loop through the list from start to end-1:
       - If the current element is greater than the next element:
         - Swap the two elements.
    - Return the sorted list.

5. Sort each list using Bubble Sort:
    - `evens = BubbleSort(evens)`
    - `odds = BubbleSort(odds)`
    - `chars = BubbleSort(chars)`

6. Create an object with three keys:
    - "evens"` → value is the sorted `evens` list.
    - "odds"` → value is the sorted `odds` list.
    - "chars"` → value is the sorted `chars` list.

7. Return the object. */

function arraySort(someArray) {
  const evens = [];
  const odds = [];
  const chars = [];

  for (let i = 0; i < someArray.length; i++) {
    if (typeof someArray[i] === 'number'){
      if (someArray[i] % 2 === 0) {
        evens.push(someArray[i])
      } else{
        odds.push(someArray[i])
      }
    }else if (typeof someArray[i] === 'string' && someArray[i].length === 1){
      chars.push(someArray[i])
    }
  }

  return {evens, odds, chars}
}

function manualSort(array){
  const n = array.length;

  for (let i = 0; i < n - 1; i++){
    for (let j = 0; j < n - i - 1; j++){
      if (array[j] > array[j + 1]){
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
}

// Test arraySort
let someArray = [3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]
console.log(arraySort(someArray))

// Test manualSort
console.log(manualSort([5, 2, 9, 1, 5, 6]));
console.log(manualSort(['b', 'a', 'd', 'c']));