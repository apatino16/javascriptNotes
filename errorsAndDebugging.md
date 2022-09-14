# Error's and Debugging
## 1. Dissect the Error
- When an error first appears on your screen, find the line in the error specific to your code. 
- Lots of error messages have tons of boilerplate details that aren’t important to the actual error. 
- You want to find the part of the error message that gives you insight about what happened. 
 - That line is generally at the top of the error stack trace.

## JavaScript Error Reference
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

# DEBUGGING JAVASCRIPT CODE
## Error Stack Traces
- An error stack trace tells a developer that the compiler has detected an error within the code. Along with, a printed message containing information about where the error occurred, what type of error was thrown, and a description of the error.
 -  In what line did the error occur? Found on the first line of the stacj trace in the following format: `<file path>/<file name>:<line number>`
 -  What type of error was thrown? The error type can be found at the beginning of the fifth line of the error stack trace.
 -  What is the error message? The error description can be found after the error type on the fifth line of the error stack trace.

## JavaScript Error Types
### `EvalError`
- Creates an instance representing an error that occurs regarding the global function eval().

### `RangeError`
- Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.

### `ReferenceError`
- Creates an instance representing an error that occurs when de-referencing an invalid reference.

### `SyntaxError`
- Creates an instance representing a syntax error.

### `TypeError`
- Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

### `URIError`
- Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.

### `AggregateError`
- Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().

### `InternalError Non-Standard`
- Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Debugging Errors
- When unexpected results occur, isolate the bug and try to fix it by using `console.log`


