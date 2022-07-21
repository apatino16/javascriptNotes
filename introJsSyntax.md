# Introduction of JavaScript Syntax

## JavaScript
JavaScript is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run.

### `console.log()`
The `console.log()` method is used to log or print messages to the console. It can also be used to print objects and other info.

### Single-Line Comments
In JavaScript, single-line comments are created with two consecutive forward slashes `//`.

### Multi-line Comments
In JavaScript, multi-line comments are created by surrounding the lines with `/*` at the beginning and `*/` at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc.

### Data Types
Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

- Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
- String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though single quotes is prefer. Some people like to think of string as a fancy word for text.
- Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
- Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
- Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
- Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
- Object: Collections of related data.

### Strings
Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".

### Booleans
Booleans are a primitive data type. They can be either true or false.

### Null
Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.

### Undefined
undefined is a primitive JavaScript value that represents lack of defined value. Variables that are declared but not initialized to a value will have the value undefined.

### Arithmetic Operators
JavaScript supports arithmetic operators for:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulo

### Remainder `/` Modulo Operator
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can.

### String Concatenation
- In JavaScript, multiple strings can be concatenated together using the `+` operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.
- `console.log('string1' + 'string2')`
- `console.log('string1' + ' ' + 'string2')`

### String `.length`
- The `.length` property of a string returns the number of characters that make up the string.
- `console.log('Sample String'.length)`

### Methods
- Methods return information about an object, and are called by appending an instance with a period ., the method name, and parentheses.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- `console.log('Sample String'.toUpperCase())`

### `Math.random()`
The `Math.random()` function returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1.

### `Math.floor()`
The `Math.floor()` function returns the largest integer less than or equal to the given number.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

https://www.codecademy.com/resources/docs/javascript
https://www.codecademy.com/workspaces/623d423f1adbe1a02ac6d817
