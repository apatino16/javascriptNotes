# JavaScript: Async-Await

- The `async...await` syntax in ES6 offers a new way write more readable and scalable code to handle promises. It uses the same features that were already built into JavaScript.

## The async Keyword
- The `async` keyword is used to write functions that handle asynchronous actions. 
- We wrap our asynchronous logic inside a function prepended with the `async` keyword. Then, we invoke that function.

```
async function myFunc() {
  // Function body here
};
 
myFunc();

```

- async function expressions:

```
const myFunc = async () => {
  // Function body here
};
 
myFunc();

```

- async functions always return a promise. This means that we can use `.then()` and `.catch` with our `async` functions. 

-An async function will return in one of three ways:

  - If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
  - If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
  - If a promise is returned from the function, it will simply return that promise.

## The await Operator

- `await` is an operator: it returns the resolved value of a promise.
- Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our `async` function until a given promise is resolved.
- The `await` keyword can only be used inside an `async` function.  

```
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
 
asyncFuncExample(); // Prints: I am resolved now!

```

### JavaScript async…await advantage
- The JavaScript `async...await` syntax allows multiple promises to be initiated and then resolved for values when required during execution of the program.
- As an alternate to chaining `.then()` functions, it offers better maintainablity of the code and a close resemblance synchronous code.

```

async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}

```

- Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously. Through this approach, a program can take advantage of concurrency, and asynchronous actions can be initiated within an async function. Since using the await keyword halts the execution of an async function, each async function can be awaited once its value is required by program logic.

### Async Function Error Handling

- JavaScript async functions uses `try...catch` statements for error handling. This method allows shared error handling for synchronous and asynchronous code.

```
async function functionName() {
  try {
 
  }
  catch (error) {
 
  }
}
 
```

```
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();

```

## `Promise.all( )`
- When using JavaScript async...await, multiple asynchronous operations can run concurrently. If the resolved value is required for each promise initiated, `Promise.all()` can be used to retrieve the resolved value, avoiding unnecessary blocking.
- `Promise.all()` also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected.
- Use if multiple asynchronous tasks are all required, but none must wait for any other before executing.

```
async function myFunction() {
  let myArray = await Promise.all([returnsPromise1(), returnsPromise2(), returnsPromise3() ]);
}

```
