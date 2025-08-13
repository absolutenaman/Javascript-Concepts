const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved promise 1 after 1 sec");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved promise 2 after 2 sec");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved promise 3 after 3 sec");
  }, 3000);
});

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
