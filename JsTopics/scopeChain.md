The scope chain refers to the hierarchical structure of scopes in JavaScript. When a variable is accessed, JavaScript first looks for it in the current scope. If not found, it moves up the scope chain to the parent scope, and so on, until it reaches the global scope. This process continues until the variable is found or the global scope is exhausted, resulting in a ReferenceError.
Reassignment and Re-declaration:
var: Can be updated and re-declared within the same scope. 
let: Can be updated but not re-declared within the same scope. 
const: Cannot be updated or re-declared within the same scope. It must be initialized upon declaration.
Hoisting:
All three keywords are hoisted, meaning their declarations are moved to the top of their scope during compilation. However, let and const are placed in a "temporal dead zone" until their actual declaration line is executed, preventing access before initialization and leading to ReferenceError if attempted. var variables are initialized with undefined during hoisting.