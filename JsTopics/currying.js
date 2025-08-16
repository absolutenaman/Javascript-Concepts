/*
Currying in JavaScript is a functional programming technique that transforms a function accepting multiple arguments into a sequence of functions, each taking a single argument.
This process allows for the partial application of arguments, creating new, specialized functions.
How it works:
Instead of calling a function like f(a, b, c), currying allows it to be called as f(a)(b)(c). Each call in the sequence returns a new function that "remembers"
the previously provided arguments through closures. The final function in the chain executes the original logic with all collected arguments.

 */

function add(a, b, c) {
    return a + b + c;
}
//A curried version of this function would look like:

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}