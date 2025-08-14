import { promise1, promise2, promise3 } from "./constants/dummyPromises.js";

Promise.myAny = function (promiseArr) {
  let rejectionCount = 0;
  let arr = [];
  if (promiseArr.length === 0)
    return Promise.reject(new AggregateError(), "empty arr");
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((item) => {
          resolve(item);
          return;
        })
        .catch((err) => {
          arr.push(err);
          rejectionCount++;
          if (rejectionCount === promiseArr.length) return reject(arr);
        });
    });
  });
};
Promise.myAny([promise1, promise2, promise3])
  .then((result) => {
    console.log("Result from myAny:", result);
  })
  .catch((error) => {
    console.error("All failed:", error);
  });
