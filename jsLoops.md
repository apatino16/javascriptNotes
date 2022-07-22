# Loops
- A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
- Loops allows to create efficient code that automates processes to make scalable, manageable programs.
- Use `for` and `while` loops to execute blocks of code multiple times.

### For Loop
- A `for` loop declares looping instructions, with three important pieces of information separated by semicolons `;` 
- The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
- The stopping condition determines when to stop looping (when the expression evaluates to `false`)
- The iteration statement updates the iterator each time the loop is completed

### Reverse Loop
- A `for` loop can iterate “in reverse” by initializing the loop variable to the starting value, testing `for` when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.

### Looping Through Arrays
- An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.

### Nested For Loop
- A nested for loop is when a for loop runs inside another for loop.
- The inner loop will run all its iterations for each iteration of the outer loop.
- One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

### While Loop
- The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.
- The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. 

### Do…While Statement
- A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.

- The `break` keyword allows programs to “break” out of the loop from within the loop’s block.

### For...Of Loop
- The loop will iterate over each element in the iterable object and terminate itself when it reaches the last item

