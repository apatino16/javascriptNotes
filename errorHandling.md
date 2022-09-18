# Error Handling
## Runtime Error in JavaScript
- A JavaScript runtime error is an error that occurs within code while its being executed. 
- Some runtime errors are built-in objects in JavaScript with a name and message property. 
- Any code after a thrown runtime error will not be evaluated.

## Javascript Error Function
- The JavaScript `Error()` function creates an error object with a custom message. 
- This function takes a string argument which becomes the value of the error’s message property. 
- An error created with this function will not stop a program from running unless the throw keyword is used to raise the error.

```
console.log(Error('Message goes here'));

// OR

console.log(new Error('Message goes here'));
```

## The `throw` Keyword in JavaScript
- The JavaScript `throw` keyword is placed before an `Error()` function call or object in order to construct and raise an error. 
- Once an error has been thrown, the program will stop running and any following code will not be executed.

```
throw Error('Helpful message to pinpoint what went wrong!');

// OR

throw new Error('Helpful message to pinpoint what went wrong!');
```

JavaScript `try catch`
- A JavaScript `try…catch` statement can anticipate and handle thrown errors (both built-in errors as well as those constructed with `Error()`) while allowing a program to continue running. 
- Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block.
`// The syntax for a try...catch statement:

```
try {
  // try block code
} catch (e) {
  // catch block code
}
```


