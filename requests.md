# HTTP Requests
- HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. 
- HTTP requires data to be transferred from one point to another over the network.
- The transfer of resources happens using TCP (Transmission Control Protocol).
- HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.

# Requests with Fetch API
- The four most commonly used types of HTTP requests are `GET`, `POST`, `PUT`, and `DELETE`.
- With a `GET` request, we’re retrieving, or getting, information from some source (usually a website). 
- For a `POST` request, we’re posting information to a source that will process the information and send it back.

- JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

## Intro to GET Requests using Fetch
- The `fetch()` function:
  - Creates a request object that contains relevant information that an API needs.
  - Sends that request object to the API endpoint provided.
  - Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

- Boilerplate code for using fetch to create a GET request:

```
// fetch GET

fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok){
    return response.json( );
  }
  throw new Error('Request failed!');

}, networkError => console.log(networkError.message)
).then(jsonResponse => {
  // code execute with jsonResponse
  });

```

  - First, call the fetch() function and pass it a URL as a string for the first argument, determining the endpoint of the request.
  - The `.then()` method is chained at the end of the `fetch()` function and in its first argument, the response of the `GET` request is passed to the callback arrow function. The `.then()` method will fire only after the promise status of `fetch()` has been resolved.
  - Inside the callback function, the `ok` property of the response object returns a Boolean value. If there are no errors, `response.ok` will be `true` and the code will `return response.json()`.
  - If `response.ok` is a falsy value, our code will `throw` an error.
  - A second argument passed to `.then()` will be another arrow function that will be triggered when the promise is rejected. It takes a single parameter, networkError. This object logs the networkError if we could not reach the endpoint at all (e.g., the server is down).
  - A second `.then()` method will run after the previous `.then()` method has finished running without error. It takes jsonResponse, which contains the returned `response.json()` object from the previous `.then()` method, as its parameter and can now be handled, however we may choose.
