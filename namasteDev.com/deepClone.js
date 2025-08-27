function deepClone(obj) {
    if (typeof (obj) !== "object" || obj===null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        let result = [];
        for (let i = 0; i < obj.length; i++) {
            if (typeof (obj[i]) !== "object")
                result[i] = obj[i];
            else
                result[i] = deepClone(obj[i]);

        }
        return result
    }
    let result = {}
    for (const value in obj) {
        if (typeof (obj[value]) === "object") {
            result[value] = deepClone(obj[value]);
        }
        else {
            result[value] = obj[value];
        }
    }
    return result;
}


// console.log(deepClone([1, [2, 3], { "a": 4 }]));
console.log(deepClone(23));


module.exports = deepClone;