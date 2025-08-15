
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
    // console.log(timeoutId);
  };
}
function loggingData(){
  console.log("Hello");
}
const debouncedButtonClick=debounce(loggingData,300);
debouncedButtonClick(loggingData);
debouncedButtonClick(loggingData);
debouncedButtonClick(loggingData);
debouncedButtonClick(loggingData);
