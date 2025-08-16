To know the difference between Microtask Queue and Callback Queue, we need to have a clear idea of how asynchronous JavaScript gets executed and what are the roles that Microtask Queue and Callback Queue play.
Functions or operations running parallel with the other functions or operations are called asynchronous functions or operations in JavaScript. 
Asynchronous JavaScript code requires Callback functions that get executed later after the desired time.
Example: The below code illustrates the use of setTimeout() function in JavaScript.
setTimeout(function greet() {
    console.log("Welcome to GeeksforGeeks!");
}, 2000);

Now, after this desired time, the code needs to be passed to the Call Stack, but this Call Stack doesn't provide a timer by which we can delay the execution of the code. So, 
it uses the help of a web API setTimeout() which is available in the window global object in the browser. After a certain time period, Call Stack gets the code through Event 
Loop which fetches the Callback functions to Call Stack. But, Callback functions can't directly go to the Event loop.
So, here comes the role of Microtask Queue and Callback Queue. These Queues work as a mediator, once the timer gets expired the callback functions are put inside these 
queues serially. And whenever the Call stack is empty, the event loop fetches them to Call Stack in FIFO order.
But, we need Microtask Queue and Callback Queue for different purposes. Let's see the comparison between them.

Callback Queue -
After the timer gets expired, the callback function is put inside the Callback Queue, and the Event Loop checks if the Call Stack is empty and if empty, pushes the callback 
function from Callback Queue to Call Stack and the callback function gets removed from the Callback Queue. 
Then the Call Stack creates an Execution Context and executes it. Sometimes this callback queue is also referred as Task Queue or Macrotask queue.
Microtask Queue -
Microtask Queue is like the Callback Queue, but Microtask Queue has higher priority. All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue. 
For example, in the case of .fetch(), the callback function gets to the Microtask Queue. 
Promise handling always has higher priority so the JavaScript engine executes all the tasks from Microtask Queue and then moves to the Callback Queue.


https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript/