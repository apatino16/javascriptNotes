# Iterators
- Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

## Higher Order Functions
- **Higher-order functions** are functions that accept other functions as arguments and/or return functions as output. 

### Functions as Data
- JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

#### JavaScript Functions: First-Class Objects
- In JavaScript, functions are **first class objects**. Therefore:
  * They have built-in properties and methods, such as the name property and the .toString() method.
  * Properties and methods can be added to them.
  * They can be passed as arguments and returned from other functions.
  * They can be assigned to variables, array elements, and other objects.

### Functions as Parameters
#### Callback Functions
- In JavaScript, a **callback function** is a function that is passed into another function as an argument. 
- This function can then be invoked during the execution of that higher order function (that it is an argument of).
- Since, in JavaScript, functions are objects, functions can be passed as arguments.

## Iterators
### Introduction to Iterators
- Iterators are **methods** called on arrays to manipulate elements and return values

### The `.forEach( )` Method
- The `.forEach()` method executes a callback function on each of the elements in an array in order.
```
// Example:
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits
fruits.forEach(fruit => console.log(`I want to eat a ` + fruit));
``` 

### The `.map( )` Method
- The `.map()` method executes a callback function on each element in an array. 
- It returns a new array made up of the return values from the callback function.
- The original array does not get altered, and the returned array may contain different elements than the original array.

```
// Example:
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)
```

### The `.filter( )' Method
- The `.filter( )` method executes a **callback function** on each element in an array. 
- The callback function for each of the elements must **return** either **true or false**. 
- The **returned array is a new array** with any elements for which the callback function returns true.

```
// Example: 
const numbers = [10, 20, 30, 40, 50];
 
const filteredNums = numbers.filter(function(number){
  if (number < 25) {
    return true;
  }
});
```
```
// Which can be refactored into:

const filteredNums = numbers.filter(function(number){
  return number < 25;
 });
```
```
// can also use arrow function syntax:

const filteredNums = numbers.filter(number => number < 25);
```

### The `.findIndex( )` Method
-  Calling `.findIndex( )` on an array will return the index of the first element that evaluates to true in the callback function.

```
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// Find the index of the element that has the value 'elephant'
const foundAnimal = animals.findIndex(animal => animal === 'elephant');

// Return the index of the first element that starts with 's'
const startsWithS = animals.findIndex(s => s[0] === 's');
```

### The `.reduce( )` Method
- 

### Iterator Documentation

### Choose the Right Iterator

