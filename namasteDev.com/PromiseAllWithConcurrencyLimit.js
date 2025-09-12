function promiseAllWithConcurrencyLimit(arr, limit) {
    let curr = 0;
    let result = [];
    let index = 0;
    let completed=0;
    return new Promise((resolve, reject) => {
        function next() {
            if (completed === arr.length) {
                resolve(result)
                return;
            }
            while (curr < limit && index < arr.length) {
                curr++;
                let currIndex=index;
                index++;
                arr[currIndex]().then((res) => {
                    result[currIndex] = res;
                    completed++;
                    curr--;
                    next();
                }).catch((err) => {
                    reject(err);
                })
            }
        }
        next()
    })
}


const promises = [
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 1 resolved after 1 second"), 1000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 2 resolved after 2 seconds"), 2000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 3 resolved after 3 seconds"), 3000)
        ),
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Promise 4 resolved after 4 seconds"), 4000)
        ),
];

promiseAllWithConcurrencyLimit(promises, 2)
    .then((r) => console.log("All results:", r))
    .catch((err) => console.error("Error:", err));