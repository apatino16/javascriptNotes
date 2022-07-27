// Key Concepts:
  // Conditionals 
  // Variables

// Goal: build a Magic Eight Ball using control flow in JavaScript
// The user will be able to input a question, then the program will output a random fortune

// Define a variable called userName
let userName = 'Anny';

// create a ternary expression that decides what to do if the user enters a name or not
// If the user enters a name use string interpolation to log Hello, userName! to the console. Otherwise, simply log Hello!
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Can you answer my question?';

console.log(`The user asked: ${userQuestion}`);

// Generates a random number between 0 and 7
randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Control flow that takes randomNumber and assigns eightBall to a reply 
switch(randomNumber) {
case 0 :
eightBall = 'It is certain';
break;
case 1 :
eightBall = 'It is decidedly so';
break;
case 2 :
eightBall = 'Reply hazy try again';
break;
case 3 :
eightBall = 'Cannot predict now';
break;
case 4 :
eightBall = 'Do not count on it';
break;
case 5 :
eightBall = 'My sources say no';
break;
case 6 :
eightBall = 'Outlook not so good';
break;
case 7 :
eightBall = 'Signs point to yes';
break;
case 8 :
eightBall = 'Of course';
break;
};

console.log(eightBall);
