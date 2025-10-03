/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  let lastTime=0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
throttledFn();
throttledFn();
throttledFn();

throttledFn();
throttledFn();


module.exports = throttle;
