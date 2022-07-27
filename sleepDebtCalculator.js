// Key Concepts:
  // Functions
  // If/ else statement
  // Switch statement

// Goal:
  // Determine the actual and ideal hours of sleep for each night of last week.
  // Calculate, in hours, how far you are from your weekly sleep goal.

// Hours slept for each night
const getSleepHours = day => {
  switch(day){
    case 'monday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'tuesday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'wednesday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'thursday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'friday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'saturday': 
    return Math.floor(Math.random() * 9);
    break;
    case 'sunday': 
    return Math.floor(Math.random() * 9);
    break;
  }
};

// Test function
// console.log(getSleepHours('tuesday'));

// Get the total sleep hours that you actually slept
const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// Get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
  };

// testing functions
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Calculate the sleep debt, if any
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    return console.log('The user got ' + (idealSleepHours - actualSleepHours) + ' hours of sleep the perfect amount!');
  } else if (actualSleepHours > idealSleepHours){
    return console.log('The user got ' + (idealSleepHours - actualSleepHours) + 'hours of sleep more than its needed!');
  } else if (actualSleepHours < idealSleepHours){
    return console.log('The user only slept ' + (idealSleepHours - actualSleepHours) + ' hours and should get some rest soon!'); 
  }
};

// Initialize program
calculateSleepDebt();

