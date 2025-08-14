import { promise1,promise2,promise3 } from "./constants/dummyPromises";

Promise.myall = function (promisesArray, limit) {
  let j = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promisesArray.length;) {
      promise
        .then((result) => {
          resolve(result);
          j--;
        })
        .catch((err) => {
          reject(err);
          return;
        });
    }
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
