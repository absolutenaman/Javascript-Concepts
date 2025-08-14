const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.myAll = function (promiseArr) {
  let arr = [];
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((item) => {
          arr.push(item);
          if (arr.length === promiseArr.length) resolve(arr);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  });
};

Promise.myAll([promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
