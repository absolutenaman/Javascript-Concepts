const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.myAll = function (promiseArr) {
  let arr = [];
  let length=0
  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0) return resolve([]);
    promiseArr.forEach((promise,index) => {
      Promise.resolve(promise)
        .then((item) => {
          arr[index]=item;
          length++;
          if (length === promiseArr.length) resolve(arr);
        })
        .catch((err) => {
            arr[index]=err;
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
