/*
In JavaScript, the prototype property is a fundamental part of the language's object-oriented programming model, 
enabling inheritance and shared functionality among objects. 
Every JavaScript function has a prototype property, which is an object that serves as a blueprint for instances 
created by that function when used as a constructor. Objects created with the new keyword inherit properties and methods from 
the constructor's prototype. 
This allows shared behavior across instances without duplicating code in memory.
*/
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
};

const alice = new Person("Alice");
const naman=new Person("naman")
console.log(alice.greet()); // "Hello, Alice!"
console.log(naman.greet()); // "Hello, Naman!"
console.log(alice.__proto__ === Person.prototype); // true

//You can add properties or methods to a prototype after the function is defined, and all instances will inherit them:


Person.prototype.sayGoodbye = function() {
    return `Goodbye, ${this.name}!`;
};
console.log(naman.sayGoodbye()); // "Goodbye, Bob!"