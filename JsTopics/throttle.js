function print(name) {
    console.log("Hello, ", name)
}

function throttle(fn, delay) {
    let lastTimeExecuted;
    return function (...args) {
        if ((Math.abs(lastTimeExecuted - Date.now())) > delay || !lastTimeExecuted) {
            lastTimeExecuted = Date.now()
            return fn(...args)
        }
    }
}

let throttledFunction = throttle(print, 100)
throttledFunction("naman");
setTimeout(() => {
    throttledFunction("naman");
}, 110)
throttledFunction("naman");
throttledFunction("naman");
throttledFunction("kanak");
setTimeout(() => {
    throttledFunction("kanak");
}, 220)
