const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved 1 after 1 seconds")
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved 2 after 2 seconds")
    }, 2000)
})
// promise1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Promise 1 executed successfully")
// })
// promise2.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Promise 2 executed successfully")
// })
// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

Promise.myAll = function (promisesArr) {
    return new Promise(async (resolve, reject) => {
        let arr = []
        for (let i = 0; i < promisesArr.length; i++) {
            promisesArr[i].then((res) => {
                if (i === promisesArr.length - 1) {
                    arr.push(res);
                    resolve(arr)
                    return
                }
                arr.push(res)
            }).catch((err) => {
                reject(err)
            })
        }

        //  promisesArr.forEach((item) => {
        //     item.then((res) => {
        //         arr.push(res)
        //     }).catch((err) => {
        //         reject(err)
        //     })
        // })
    })

}
Promise.myAll([promise1, promise2]).then((res) => {
    console.log("resolved with", res)
}).catch((err) => {
    console.log("rejected with", err)
})

Promise.all([promise1, promise2]).then((res) => {
    console.log("resolved with", res)
}).catch((err) => {
    console.log("rejected with", err)
})