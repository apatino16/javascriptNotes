// Key Concepts:
  // Control Flow: Conditionals
  // Switch statements
  // If/ Else statements

// Goal: 
  // Get the user’s choice.
  // Get the computer’s choice.
  // Compare the two choices and determine a winner.
  // Start the program and display the results.

// Context:
// The possible outcomes are:
  // Rock destroys scissors.
  // Scissors cut paper.
  // Paper covers rock.
  // If there’s a tie, then the game ends in a draw.

// create a function named getUserChoice that takes a single parameter userInput
const getUserChoice = userInput => {
  // Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations toLowerCase() function  is used to make the userInput all lowercase.
  userInput = userInput.toLowerCase();
  // Make sure that user typed a valid choice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else{
    // Error Message
    console.log('Please choose a valid response: rock, paper, or scissors')
  };
};

// Testing that the function works correctly
// console.log(getUserChoice('Paper')) // Prints: paper
// console.log(getUserChoice('shoe')) //Prints Error Message

// Computer's choice
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Testing that the function works correctly
// console.log(getComputerChoice()); // Prints rock, paper, scissors at random

// Determine the Winner

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'This round is a tie!';
  };
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'You Loose. Computer Rules!';
    } else{
      return 'You won human!';
    }
  };
  if (userChoice === 'rock'){
    if (computerChoice === 'scissors'){
      return 'You won human!';
    } else{
      return 'You Loose. Computer Rules!';
    }
  };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'You Loose. Computer Rules!';
    } else{
      return 'You won human!';
    }
  };
   if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return 'You won human!';
    } else{
      return 'You Loose. Computer Rules!';
    }
  };
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'You Loose. Computer Rules!';
    } else{
      return 'You won human!';
    }
  };
   if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
      return 'You won human!';
    } else{
      return 'You Loose. Computer Rules!';
    }
  };
  if (userChoice === 'bomb'){
      return 'You won human!';
  };
};

// Testing that the functions works correctly 
// console.log(determineWinner('rock', 'paper')) // Prints You loose. Computer Rules!
// console.log(determineWinner('paper', 'paper')) // rints This round is a tie!
// console.log(determineWinner('scissors', 'paper')) // Prints You won human!

// 

const playGame = ( ) => {
  let userChoice = getUserChoice('rock');
  console.log('You chose: ' + userChoice);
  let computerChoice = getComputerChoice();
  console.log('Computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
