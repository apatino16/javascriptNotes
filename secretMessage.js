// Key Concepts
  // Arrays
  // How to manipulate arrays

// Goal: Using array methods, transform an array of strings into a secret message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length); // Prints 24

// Remove the last string of the array secretMessage
secretMessage.pop();
// console.log(secretMessage.length); // Prints 23

// Add the words to and Program as separate strings to the end of the secretMessage array
secretMessage.push('to', 'Program');
// console.log(secretMessage); // to and Program added

// Change the word easily to the word right
secretMessage['easily'] = 'right';
// console.log(secretMessage['easily']); // Prints right
// console.log(secretMessage); // Prints easily: 'right

// Remove the first string of the array
secretMessage.shift();
// console.log(secretMessage); // 'Learning' has been removed

// Add the string Programming to the beginning of the array
secretMessage.unshift('Programming');
// console.log(secretMessage); // 'Programming' has been added at the beginning

// remove the strings get, right, the, first, time,, and replace them with the single string know,
secretMessage.splice(6, 5, 'know,')

// Print secret message
console.log(secretMessage.join(' ')); 


