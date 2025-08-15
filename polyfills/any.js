const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Promise 1 failed"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.myAny = function (promiseArr) {
  let rejectionCount = 0;
  let arr = [];
  if (promiseArr.length === 0)
    return Promise.reject(new AggregateError([], "All promises are rejected"));
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((item) => {
          resolve(item);
        })
        .catch((err) => {
          arr.push(err);
          rejectionCount++;
          if (rejectionCount === promiseArr.length)
            reject(new AggregateError(arr, "All promises are rejected"));
        });
    });
  });
};
Promise.myAny([promise1,promise2,promise3])
  .then((result) => {
    console.log("Result from myAny:", result);
  })
  .catch((error) => {
    console.error("All failed:", error);
  });
