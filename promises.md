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

## The Node setTimeout() Function

- `setTimeout()` is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.
- setTimeout() has two parameters: a callback function and a delay in milliseconds.

## `.then()` method of a JavaScript Promise object
- The `.then()` method of a JavaScript Promise object can be used to get the eventual result (or error) of the asynchronous operation.
- `.then()` is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

  - The first handler, sometimes called `onFulfilled`, is a success handler, and it should contain the logic for the promise resolving.
  - The second handler, sometimes called `onRejected`, is a failure handler, and it should contain the logic for the promise rejecting.

- We can invoke .then() with one, both, or neither handler!

```

returnsPromise().then(myOnFulfilled, myOnRejected);

```

## The `.catch()` method for handling rejection

- The `.catch()` function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection.

```

promise
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
  
```

### Chaining multiple .then() methods

- The `.then()` method returns a Promise, even if one or both of the handler functions are absent. Because of this, multiple .then() methods can be chained together. This is known as composition.
- Promises are designed with composition in mind

```

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});

```

### Common Mistakes
- Nesting promises instead of chaining them.
- Forgetting to return a promise. NOTE: forgetting to return our promise won’t throw an error

## JavaScript Promise.all()
- `Promise.all()` accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

  - If every promise in the argument array resolves, the single promise returned from `Promise.all()` will resolve with an array containing the resolve value from each promise in the argument array.
  - If any promise from the argument array rejects, the single promise returned from `Promise.all()` will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.

```
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
  
```

