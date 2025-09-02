/* Write a function to find the longest common prefix string amongst an
array of strings. If there is no common prefix, return an empty string "". */

/* 
1. Define a function that takes an array of strings.
2. If the array is empty, return "".
3. Initialize 'prefix' as the first string in the array.
4. Loop through the remaining strings in the array:
    - While the current string does not start with 'prefix':
        - Remove the last character from 'prefix'.
        - If 'prefix' becomes empty, return "".
5. Return 'prefix'.
 */

function longestCommonPrefix(strings){
    if (strings.length === 0)return "";

    let prefix = strings[0];

    for (let i = 0; i < strings.length; i++){
        while (strings[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(prefix === "")return "";
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));