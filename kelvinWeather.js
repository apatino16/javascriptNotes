// Key Concepts
  // Comments
  // Constant variables
  // Math.floor 
  // Log 

// Goal:convert Kelvin to Celsius, then to Fahrenheit

// The forecast today is 293 Kelvin. The value will stay constant. 
const kelvin = 293;

//To convert celsius to kelvin you have to subtract 273. 
const celsius = kelvin - 273;

//Assigning Farenheit
let fahrenheit = celsius * (9/5) + 32;

//Round Farenheit temperature
fahrenheit = Math.floor(fahrenheit);

//Interpolating the string to log the temperature in Farenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Converting Celsius to the Newton scale
let newton = celsius * (33/100);

//Rounding down the Newton temperature
newton = Math.floor(newton);

//Interpolating the string to log the temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`);

