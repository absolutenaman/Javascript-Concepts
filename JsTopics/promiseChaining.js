/*
A Promise represents an asynchronous operation that eventually resolves with a value or rejects with an error. 
Chaining allows you to sequence these operations by returning a new Promise in each .then() block, enabling the next .then() 
to consume its result.
*/

promise
  .then(result1 => {
    // Handle result1, return a value or new Promise
    return asyncOperation2();
  })
  .then(result2 => {
    // Handle result2, return a value or new Promise
    return asyncOperation3();
  })
  .catch(error => {
    // Handle any error from the chain
    console.error('Error:', error);
  });

  /*
Each .then() returns a new Promise: This allows further chaining.
Return values in .then(): If you return a value, it’s passed to the next .then(). If you return a Promise, the next .then() waits for it to resolve.
Error propagation: Any error (rejection) in the chain skips to the nearest .catch().
Avoid callback hell: Chaining flattens nested callbacks, improving readability compared to the pyramid structure you mentioned.
  */


//Example: Sequential API Calls
function fetchData(url) {
  return fetch(url).then(response => response.json());
}

fetchData('https://api.example.com/user')
  .then(user => {
    console.log('User:', user);
    return fetchData(`https://api.example.com/posts/${user.id}`);
  })
  .then(posts => {
    console.log('Posts:', posts);
    return fetchData(`https://api.example.com/comments/${posts[0].id}`);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });