# JavaScript Promises

- Promises are objects that represent the eventual outcome of an asynchronous operation. 
- A `Promise` object can be in one of three states:

  - Pending: The initial state— the operation has not completed yet.
  - Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
  - The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.

- An instance of a JavaScript Promise object is created using the `new` keyword.

- The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

- The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

  - resolve is a function with one argument. If invoked, `resolve()` will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
  - reject is a function that takes a reason or error as an argument. If invoked, `reject()` will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().

```

const anExampleExecutor = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!');
    }
}

const myFirstPromise = new Promise(anExampleExecutor);

```

### The Node setTimeout() Function

- `setTimeout()` is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.
