/*
In JavaScript, scope defines the accessibility of variables, functions, and objects in different parts of your code. 
Function scope and block scope are two key types of scope:
Function Scope -
Definition: Variables declared with the var keyword have function scope. This means they are accessible anywhere within 
the function in which they are declared, regardless of nested blocks (like if statements or for loops) inside that function.
Accessibility: A var variable declared inside a function is not accessible from outside that function.
Example:
*/
    function exampleFunction() {
        var functionScopedVar = "I'm accessible throughout the function";
        if (true) {
            var anotherVar = "I'm also accessible here and outside this if block";
        }
        console.log(functionScopedVar); // Output: I'm accessible throughout the function
        console.log(anotherVar); // Output: I'm also accessible here and outside this if block
    }
    exampleFunction();
    //console.log(functionScopedVar); // This would cause an error (ReferenceError)

/*
Block Scope:
Definition: Variables declared with let and const keywords have block scope. This means they are accessible only within 
the specific block (delimited by curly braces {}) where they are declared. This includes if statements, for loops, while 
loops, and any other code block.
Accessibility: A let or const variable declared inside a block is not accessible outside of that block.
Example:
*/
    function anotherExample() {
        let functionBlockScoped = "I'm only accessible within this function block";
        if (true) {
            let blockScopedLet = "I'm only accessible within this if block";
            const blockScopedConst = "I'm also only accessible within this if block";
            console.log(blockScopedLet); // Output: I'm only accessible within this if block
            console.log(blockScopedConst); // Output: I'm also only accessible within this if block
        }
        console.log(functionBlockScoped); // Output: I'm only accessible within this function block
        // console.log(blockScopedLet); // This would cause an error (ReferenceError)
        // console.log(blockScopedConst); // This would cause an error (ReferenceError)
    }
    anotherExample();