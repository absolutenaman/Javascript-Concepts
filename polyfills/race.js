const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "Promise 2 rejected!");
});

Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      if (promise && typeof promise.then !== 'function') {
        resolve(promise);
        return;
      }
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((value) => {
          reject(value);
        });
    });
  });
};

Promise.myRace([42, promise2])
  .then((value) => {
    console.log("First settled value:", value); // Output: First settled value: Promise 2 rejected!
  })
  .catch((error) => {
    console.error("First settled error:", error); // This would be called if the first settled promise rejected
  });
