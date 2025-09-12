function promiseAllWithConcurrencyLimitf(functions, limit) {
    let curr = 0;
    let index = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        function AsyncFunc() {
            if (index >= functions.length && curr === 0) {
                return resolve(result)
            }
            while (curr < limit && index < functions.length) {
                const i = index++;
                curr++;
                functions[i]().then((res) => {
                    result[i] = res;
                    curr--;

                    AsyncFunc();
                }).catch((err) => {
                    reject(err)
                })
            }
        }

        AsyncFunc()
    })

}

//For the purpose of user debugging.
//pass appropriate input in below function call
let prom = promiseAllWithConcurrencyLimitf([() => new Promise(resolve => setTimeout(() => resolve(1), 5000)),
    () => new Promise((resolve, reject) => setTimeout(() => resolve(2), 5000))], 1)
prom.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});
