/*
The Call Stack in JavaScript is a data structure, operating on a Last-In-First-Out (LIFO) principle, that the JavaScript engine uses to keep track of
function calls during the execution of a script.
Here's how it works:
Function Invocation:
When a function is called, a new "frame" or "context" for that function is created and pushed onto the top of the Call Stack. This frame contains information
about the function's local variables, parameters, and the point in the code to return to after the function completes.
Execution:
The JavaScript engine then executes the code within the function at the top of the stack.
Nested Calls:
If the currently executing function calls another function, a new frame for the called function is pushed onto the stack, on top of the previous one.
The execution then shifts to this new function.
Function Completion:
When a function finishes its execution (either by returning a value or reaching the end of its code), its frame is popped off the top of the stack.
Resumption:
The JavaScript engine then resumes execution at the point where the previous function left off, which is now at the top of the stack.
 */
function first() {
    second();
    console.log("First function finished");
}

function second() {
    third();
    console.log("Second function finished");
}

function third() {
    console.log("Third function finished");
}

first();