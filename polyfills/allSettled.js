const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Promise 1 failed"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.myAllSettled = function (promisesArray) {
  let ans = [];
  return new Promise((resolve, reject) => {
    promisesArray.forEach((element,index) => {
      Promise.resolve(element)
        .then((value) => {
          ans[index]={status:'fulfilled',value}
          if (ans.length === promisesArray.length) resolve(ans);
        })
        .catch((err) => {
           ans[index]={status:'rejected',err};
          if (ans.length === promisesArray.length) resolve(ans);
        });
    });
  });
};

Promise.myAllSettled([promise1, promise2, promise3])
  .then((val) => {
    console.log(val);
  })
  .catch((val) => {
    console.log(val);
  });
