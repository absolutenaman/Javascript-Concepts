const promises = [
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 1 resolved after 3 second"), 3000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 2 resolved after 2 seconds"), 2000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 3 resolved after 2 seconds"), 2000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 4 resolved after 2 seconds"), 2000)
        ),
];

promiseAllWithConcurrencyLimit(promises, 2)
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
                let currIndex = index;
                index++;
                promisesArr[currIndex]().then((res) => {
                    ans[currIndex]=res
                    currtasksInQueue--;
                    next()
                }).catch((err) => {
                    reject(err)
                })
            }
            if (ans.length === promisesArr.length) {
                resolve(ans)
                const endTime = performance.now(); // Get a high-resolution timestamp at the end
                const elapsedTime = endTime - startTime; // Calculate the elapsed time in milliseconds
                console.log(elapsedTime)
            }
        }

        const startTime = performance.now();
        next();
    })
}

