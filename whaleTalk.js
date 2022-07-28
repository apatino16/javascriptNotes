// Key Concepts:
  // Variables
  // Arrays 
  // for loops

// Goal: translate a phrase into whale talk equivalent using loops

// Context: Rules
  // There are no consonants. Only vowels excluding “y”
  // The u‘s and e‘s are extra long, so we must double them in our program

// Creating a variable with the phrase to be translated
const input = 'turpentine and turtles';

// Declaring an array with all the vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Empty array to store the vowels from the input string
const resultArray = [];

// Nested for loop
// The outer loop is iterating through each letter of our phrase
for (let i = 0; i < input.length; i++){
 //  console.log('i is ' + i);
 // Adding an extra 'e'
 if (input[i] === 'e'){
   resultArray.push(input[i]);
 }
 // Adding an extra 'u'
 if (input[i] === 'u'){
   resultArray.push(input[i]);
 }
 // The inner loop is comparing each letter to each vowel
  for (let j = 0 ; j < vowels.length; j++){
  //  console.log('j is ' + j);
    if (input[i] === vowels[j]){
    //  console.log(input[i])
    resultArray.push(input[i]);
    }
  }
};
// console.log(resultArray); // For loop works correctly

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
