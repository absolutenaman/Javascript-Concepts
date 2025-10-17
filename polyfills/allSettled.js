const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Promise 1 failed"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.myAllSettled=function (promiseArr){
    return new Promise((resolve, reject)=>{
        let arr=[]
        for (let i = 0; i <promiseArr.length ; i++) {
            promiseArr[i].then((res)=>{
                arr.push(res);
                if(i===promiseArr.length-1){
                    resolve(arr)
                }
            }).catch(()=>{

            })
        }
    })
}

Promise.myAllSettled([promise1,promise2,promise3]).then((res)=>{
    console.log("resolved with",res)
})
Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
    console.log("resolved with",res)
}).catch((err)=>{
    console.log("rejected with",err)
})