//Important

function flattenObject(obj) {
    let result = {}
    for (const key in obj) {
        if (typeof (obj[key]) === "object" && !Array.isArray(obj[key]) && obj[key]
            !==null) {
            let temp = flattenObject(obj[key]);
            for (const j in temp) {
                result[`${key}.${j}`]=temp[j]
            }
        } else {
            result[key]=obj[key]
        }
    }
// console.log("result",result)
    return result;

}

//For the purpose of user debugging.
console.log(flattenObject({ a: null, b: { c: undefined } }))

module.exports = flattenObject