let obj1 = { a: 1, b: { c: 2 }, d: [3, 4], c: undefined, d: null, e: "#$" };
function deepClone(obj) {
    let result;
    if(Array.isArray(obj))
    result=[];
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  } else {
      for (let i=0;i<obj.length;i++) {
        if (Array.isArray(obj[key]))
            
        if (typeof key === "object") {
          obj[key] = deepClone(obj[key]);
        }
      }
    } 
   return obj;
}
let result=(deepClone(obj1));
obj1.b.c=4;
console.log(result);
