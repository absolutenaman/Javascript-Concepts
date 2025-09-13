function mapAsyncLimit(arr, limit, asyncFn) {
    let result = []
    let currRunningTasks = 0;
    let completed = 0;
    let index = 0;
    return new Promise((resolve, reject) => {
        function next() {
            if (completed === arr.length)
            {
                resolve(result);
                return;
            }
            while (index < arr.length && currRunningTasks < limit) {
                currRunningTasks++;
                let currIndex = index;
                index++;
                asyncFn(arr[currIndex]).then((res) => {
                    currRunningTasks--;
                    completed++;
                    result[currIndex] = res;
                    next()
                }).catch((err) => {
                    reject(err);
                })
            }
        }
        next()
    })

}

//For the purpose of user debugging.
//pass appropiate input in below function call
mapAsyncLimit();

module.exports = mapAsyncLimit