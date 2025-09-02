/* Given an Array containing integers, floats, and one character strings,
write a function that takes an Array as a parameter and returns an
Object with keys evens, odds, and chars. The value for evens is an array
of sorted even numbers, the value for odds is a list of sorted odd
numbers and chars is a list of sorted single-character strings.
Caution: DO NOT use the sort array method */

/*
1. Define a function that takes an array as a parameter.
2. Initialize three empty lists.
3. Loop through each element in the array.
4. Sort each list 
5. Create an object with three keys
6. Return the object. */

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

// Test arraySort
let someArray = [3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]
console.log(arraySort(someArray))