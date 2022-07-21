# Functions
Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

### Function Declaration
Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:

### The `function` keyword.
The function name.
An optional list of parameters separated by commas enclosed by a set of parentheses `()`.
A function body enclosed in a set of curly braces `{}`.

`function functionName() { // Code body between curly braces}`

### Calling Functions
Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called.

Syntax for calling a function:
`functionName();`

### Function Parameters
Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters.

Syntax for a function declaration with parameters:
```
function functionName(parameter) {
  // Function body of someFunction
}
```

Syntax for a function call with argument:
`functionName(argument);`

### Helper Functions
- To add a return statement that calls another function inside

```
function newFunction(firstParameter, secondParameter) {
  return helperFunction(firstParameter, secondParameter) * 1000;
};
```

- To save the return value of a function to a variable
`const saveValue = newFunction(parameter, parameter);`

### Function Expressions
Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable.

```
const variableName = function(paramGoesHere){
};
// To call the function:
someFunction('an argument');
```

### Anonymous functions
Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.

### Arrow Functions
 The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.
There are several variations of arrow functions:
- Arrow functions with a single parameter do not require () around the parameter list.
- Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.

```
const newFunction = () => {
  // Function body goes here
};
```
```
zero parameters:
const FunctionName = ( ) => { };
1 parameter:
const FunctionName = parameter => { };
2+ parameters:
const FunctionName = (parameter1, paramenter2, ...) => { };
```

Concise arrow functions
`const multiply = (a, b) => a * b;`
