function deepClone(obj) {
    let ans;
    if (typeof obj === "object" && !Array.isArray(obj))
        ans = {}
    else
        ans = []
    if (typeof obj !== "object" || obj===null)
        return obj;
    if(Array.isArray(obj)){
        for(let i=0;i<obj.length;i++){
            if(typeof obj[i]!=="object"){
                ans[i]=obj[i]
            } else {
                ans[i]=deepClone(obj[i])
            }
        }
    } else
    for (const key in obj) {
        if (typeof obj[key] !== "object" || obj[key] === undefined) {
            ans[key] = obj[key]
        } else {
            if (Array.isArray(obj[key])) {
                ans[key] = obj[key]
            } else {
                ans[key] = deepClone(obj[key])
            }
        }
    }
    return ans;
}


//For the purpose of user debugging.
// console.log({a: 1, b: [2, 4], c: {a: 34}})
// console.log(deepClone({a: {b: {c: 3}}}));
// console.log(deepClone({"a": 1, "b": 2}));
console.log(deepClone([{"a":1,"b": 2},{"c":[2,34],"d":21}]));
console.log(deepClone(null));

module.exports = deepClone;