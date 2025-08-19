/*
The window object in JavaScript represents the browser window or tab in which your web page is loaded.
It is the global object in a browser environment, meaning that all global variables, functions, and objects
defined in your JavaScript code are automatically members of the window object.
Here's a breakdown of its key aspects:
Global Scope:
The window object provides the global scope for JavaScript code running in a web browser. This means you can access global
variables and functions directly without explicitly referencing window.variableName or window.functionName.
Browser Interaction:
It offers a wide range of properties and methods for interacting with the browser environment. This includes:
Document Object Model (DOM) Access: The window.document property provides access to the Document object, which represents
the HTML content of the current page and allows for manipulation of its elements.
Browser Features: Methods like alert(), confirm(), prompt(), open(), close(), setTimeout(), and setInterval() allow for
displaying dialogs, managing windows/tabs, and controlling timed execution.
Browser Information: Properties like window.innerHeight, window.innerWidth, window.location, and window.navigator provide
information about the window's dimensions, the current URL, and the browser itself.
Event Handling: The window object can also be used to attach and remove event listeners for various window-related events.
 */

// Accessing a global variable
let myGlobalVariable = "Hello from global!";
console.log(window.myGlobalVariable); // Output: Hello from global!

// Displaying an alert
window.alert("This is an alert!");

// Getting the current URL
console.log(window.location.href);