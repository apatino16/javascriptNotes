// Key Concepts

// Goal: convert your human age into dog years using math operators and variables

// Context: How old would you be if you were a dog?
// Here’s how you convert your age from “human years” to “dog years”:
// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

// Assigning the constant variable myAge to my current age in years
const myAge = 24;

// Assigning the variable earlyYears to the value 2
let earlyYears = 2;

// multiply the value saved to earlyYears by 10.5
earlyYears *= 10.5;

// Since we already accounted for the first two years, we will subtract 2 from myAge 
let laterYears = myAge - 2; 

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
laterYears *= 4;

// Checking work by printing earlyYears and laterYears
//earlyYears: 2*10.5 = 21 correct
console.log(earlyYears);

// laterYears: (24-2) * 4 = 88 correct
console.log(laterYears);

//My dog years is earlyYears plus laterYears
let myAgeInDogYears = earlyYears + laterYears;

//Assigned the variable myName to my name and lowercase it
const myName = 'Anny'.toLowerCase();

//Interpolating a statement to display my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
