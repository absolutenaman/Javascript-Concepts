function deepOmit(obj, keysToOmit) {
    let result;
    if (!Array.isArray(obj)) {
        result={}
    } else {
        result=[]
    }
    for (const key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            if (Array.isArray(result)) {
                result.push(deepOmit(obj[key], keysToOmit))
            } else {
                result[key] = deepOmit(obj[key], keysToOmit);
            }
        } else {
            for (let j = 0; j < keysToOmit.length; j++) {
                if (keysToOmit[j] !== key) {
                    if (Array.isArray(result)) {
                        result.push(obj[key])
                    } else {
                        result[key] = obj[key];
                    }
                }
            }
        }
    }
    return result;
}

//For the purpose of user debugging.
//pass your object and keys in function call
console.log(deepOmit([{ a: 1, b: 2 },{b:3,c:4}], ['b']))
module.exports = deepOmit