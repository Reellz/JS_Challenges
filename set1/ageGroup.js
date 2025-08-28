/* Write a JavaScript program that prompts a user to enter their year of
birth and in turn prints a string in the console stating whether the user
is a minor, a youth, or an elder. Anyone below 18 years is a minor,
anyone between 18 and 36 years is a youth and the rest are elders */

// 1. Prompt user for input
// 2. Convert input
// 3. Validate input
// 4. Calculate age
// 5. Use conditional logic to classify age group
// 6. Print result

let birthYear = Number(prompt("Enter your birth year"));

function ageGroup(birth) {
   let currentYear = new Date().getFullYear();
   
   if (isNaN(birth) || birth > currentYear){
      console.log("Invalid Input, please enter a valid year.");
      return;
   }

   let currentAge = currentYear - birth;

   if (currentAge < 18){
      console.log("You are a Minor.");
   } else if (currentAge >= 18 && currentAge <= 36){
      console.log("You are a Youth.")
   } else {
      console.log("You are an Elder.")
   }
}

ageGroup(birthYear);