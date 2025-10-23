function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function loggingData(name) {
    console.log("Hello",name);
}

const debouncedButtonClick = debounce(loggingData, 300);
setTimeout(() => {
    debouncedButtonClick("naman");
}, 300)
setTimeout(() => {
    debouncedButtonClick("Kanak");
}, 650)
debouncedButtonClick();
