const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 1 succeeded"), 1000);
}).catch((err)=>{
  console.log(err);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 1000);
});


Promise.myall = function (promisesArray) {
  let result=[];
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promisesArray.length;i++) {
      await promisesArray[i]
          .then((res) => {
            result[i]=res
          })
          .catch((err) => {
            reject(err);
          });
    }
    await resolve(result)
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
