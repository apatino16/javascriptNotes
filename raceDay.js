// Key Concepts

// Goal: write a program that will register runners for the race and give them instructions on race day


// Context:
// There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
// Race number:
  // Early adults receive a race number at or above 1000.
  // All others receive a number below 1000.
// Start time:
  // Adult registrants run at 9:30 am or 11:00 am.
  // Early adults run at 9:30 am.
  // Late adults run at 11:00 am.
  // Youth registrants run at 12:30 pm (regardless of registration).

// Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

//variable that indicates whether a runner registered early or not
const registeredEarly = true;

// variable for the runner’s age 
const Age = 24;

// control flow statement that checks whether the runner is an adult AND registered early
if (Age > 18 && registeredEarly) {
  raceNumber += 1000
};

// control flow statement that will check age and registration time to determine race time
if (Age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`);
} else if (Age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`);
} else if (Age < 18){
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`);
} else {
  console.log('Please see the registration desk')
};
