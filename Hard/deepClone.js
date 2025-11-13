let obj1 = { a: 1, b: { c: 2 }, f: [3, 4], c: undefined, d: null, e: "#$" };
function deepClone(obj) {
  let result;
  if (typeof obj != "object" || obj === undefined || obj === null) return obj;
  if (Array.isArray(obj)) result = [];
  else result = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      let arr = [];
      for (let index = 0; index < obj[key].length; index++) {
        arr[index] = deepClone(obj[key][index]);
      }
      result[key] = arr;
    } else {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
let result = deepClone(obj1);
obj1.b.c=45;
console.log(result);
