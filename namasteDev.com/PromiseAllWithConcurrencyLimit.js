const arr = [
    new Promise((resolve) =>
        setTimeout(() => resolve("Promise 1 resolved after 1 second"), 10000)),
    new Promise((resolve) =>
        setTimeout(() => resolve("Promise 2 resolved after 2 seconds"), 2000)
    ),
    new Promise((resolve) =>
        setTimeout(() => resolve("Promise 3 resolved after 3 seconds"), 3000)
    ),
    new Promise((resolve) =>
        setTimeout(() => resolve("Promise 4 resolved after 4 seconds"), 4000))
];

promiseAllWithConcurrencyLimit(arr, 2)
    .then((r) => console.log("All results:", r))
    .catch((err) => console.error("Error:", err));

function promiseAllWithConcurrencyLimit(promisesArr, limit) {
    let index = 0;
    let currtasksInQueue = 0;
    let ans = []
    return new Promise((resolve, reject) => {
        function next() {
            while (currtasksInQueue < limit && index < promisesArr.length) {
                currtasksInQueue++;
                promisesArr[index].then((res) => {
                    ans.push(res)
                    currtasksInQueue--;
                    index++;
                    console.log(res)
                    next()
                    if (ans.length === promisesArr.length)
                        return resolve(ans)
                }).catch((err) => {
                    reject(err)
                })
            }
        }
        next();
    })
}

