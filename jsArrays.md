# Arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets [ ]. 

- The array is represented by the square brackets [ ] and the content inside.
- Each content item inside an array is called an element.
- There are three different elements inside the array.
- Each element inside the array is a different data type.

We can also save an array to a variable. 
`const sampleArray = [1, 'Hello World!', true];`

### Index
Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index is surrounded by square brackets.
When you try to access an index in an array that does not contain an element you will get a value of undefined.

To reassign an element of an array, access the element by index and then use the = operator to assign a new value. 

### Mutable
JavaScript arrays are mutable, meaning that the values they contain can be changed. You cannot re-assign a const variable. However, if a const variable contains an array, you can mutate elements in the array but not re-assign an new value!

Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop().

## Array Methods

### Method `.push( )`
The `.push( )` method of JavaScript arrays can be used to add one or more elements to the end of an array. `.push( )` mutates the original array and returns the new length of the array. Destructive Array Method.

### Method `.pop( )`
The `.pop( )` method does not take any arguments, it simply removes the last element from an array and returns that element.

### Method `.shift( )`
The `.shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

### Method `.unshift( )`

### Method `.slice( )`
The `.slice( )` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
`array.slice(first, last+1)`

### Method `.indexOf( )`
`.indexOf( )` returns the first element that matches the value of the argument passed in. If there isn’t an element whose value matches that of the argument, -1 is returned.

### Property `.length`
The `.length` property of a JavaScript array indicates the number of elements the array contains.

### Arrays and Functions
When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.

### Nested Arrays
Arrays inside other array. 
to access the elements within the nested array we can chain, or add on, more bracket notation with index values.
