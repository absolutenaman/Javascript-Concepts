/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  let timer;
  return function (...args) {
    // clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
throttledFn();
throttledFn();
throttledFn();

throttledFn();
throttledFn();


module.exports = throttle;
