/*
In JavaScript, both callbacks and Promises are mechanisms used to handle asynchronous operations, 
but they differ significantly in their structure and how they manage control flow and error handling.
Callbacks:
A callback is a function passed as an argument to another function, intended to be executed after the 
completion of an asynchronous operation. When the asynchronous task finishes, the "calling" function invokes the 
callback function,
 often passing the result or an error as an argument.
*/
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data";
    callback(null, data); // null for no error, data for success
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Data received:", data);
  }
});

/*
Promises:
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. 
A Promise can be in one of three states:
Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: Meaning the operation completed successfully.
Rejected: Meaning the operation failed.
Promises provide a cleaner, more structured way to handle asynchronous code compared to deeply nested callbacks 
(often referred to as "callback hell"). They offer chaining with .then() for sequential operations and .catch() 
for centralized error handling.
*/
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve("Some data");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });