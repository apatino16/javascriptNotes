# SCOPE
### Scope
Scope is a concept that refers to where values and functions can be accessed.
Various scopes include:
      - Global scope (a value/function in the global scope can be used anywhere in the entire program)
      - File or module scope (the value/function can only be accessed from within the file)
      - Function scope (only visible within the function),
      - Code block scope (only visible within a { ... } codeblock)

### Block Scoped Variables
const and let are block scoped variables, meaning they are only accessible in their block or nested blocks. In the given code block, trying to print the statusMessage using the console.log() method will result in a ReferenceError. It is accessible only inside that if block.

### Global Variables
JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.

> Note: It is best practice to keep global variables to a minimum.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.

### Good Scoping
- use block scope.

### Definitions:

- Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
- Blocks are statements that exist within curly braces {}.
- Global scope refers to the context within which variables are accessible to every part of the program.
- Global variables are variables that exist within global scope.
- Block scope refers to the context within which variables are accessible only within the block they are defined.
- Local variables are variables that exist within block scope.
- Global namespace is the space in our code that contains globally scoped information.
- Scope pollution is when too many variables exist in a namespace or variable names are reused.

### Running JavaScript in the Browser Console
Opening the browser console
`Ctrl + Shift + J`
- Customize and control Google Chrome (3-vertical-dot icon ⋮) > More tools > Developer tools, then click Console tab
1. You can do arithmetic
2. Call and write functions
3. interact with the page's DOM
The console provides a quick and convenient way of running any JS code in the browser, whether independent of or directly related to the page content. If any edits are made to the page, the changes are temporary and will be gone upon refreshing, which works great for testing purposes when you don’t want to modify the actual code.

### Introduction to JavaScript Runtime Environments

A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs. This article covers the two JavaScript runtime environments:
- the runtime environment of a browser (like Chrome, or Firefox)
Applications created for and executed in the browser are known as front-end applications. 

- the Node runtime environment
the Node runtime environment gives back-end applications access to a variety of features unavailable in a browser, such as access to the server’s file system, database, and network.
