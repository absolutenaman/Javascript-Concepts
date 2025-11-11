const obj1 = { a: 1, b: { c: 2 }, d: [3, 4], c: undefined, d: null, e: "#$" };
function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  } else {
    if(!Array.isArray(obj)){
        for(const key in obj){
            if(typeof key==="object"){
                obj[key]=deepClone(obj[key])
            }
        }
    }
  }
}
console.log( deepClone(obj1));

