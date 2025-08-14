const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Promise 1 failed"), 1000);
}).catch((err)=>{
    console.log(err);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

export {promise1,promise2,promise3}