/* Write a function named firstPalindrome which takes a parameter:
words. Given an array of string words, return the first palindromic string
in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward. */

/* 1. Define function `firstPalindrome(words)`
    - Input: an array of strings `words`.

2. Loop through each word in the array
    - For each `word` in `words`:

3. Check if the word is a palindrome
    - Reverse the `word`.
    - Compare reversed word to the original.
    - If they are the same → it’s a palindrome.

4. If palindrome found
    - Immediately return that `word` (since we want the first one).

5. If no palindrome found after checking all words
    - Return an empty string `""`. */

function firstPalindrome(words){
    for (let i = 0; i < words.length; i++){
        const palindrome = words[i].split('').reverse().join('')
        if (words[i] === palindrome){
            return words[i]
        }
    }
    return ""
}

const words = ["abc", "car", "ada", "racecar", "cool"]
console.log(firstPalindrome(words))