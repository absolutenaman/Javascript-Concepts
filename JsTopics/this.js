/*
the this keyword in JavaScript is a reference to the object that is currently executing the 
function or the context in which a function is invoked. Its value depends on the call site 
(how and where the function is called), 
not where the function is defined.
*/
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log(`Hello, ${this.name}!`);
};
const alice = new Person("Alice");
alice.sayHello(); // "Hello, Alice!" (this is alice)
const boundSayHello = alice.sayHello.bind({ name: "Bob" });
boundSayHello(); // "Hello, Bob!" (this is explicitly bound)

/*
When this is used outside any function or in a function not bound to an object, it refers to the global object.
In browsers, this is window. In Node.js, it’s the global object (in non-strict mode).
In strict mode ("use strict"), this is undefined in global functions.
*/