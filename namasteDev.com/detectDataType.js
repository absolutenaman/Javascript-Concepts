function detectType(value) {
    // Your implementation
    if (typeof (value) === "object") {
        if(Array.isArray(value))
            return "array";
        else if(value===null)
            return "null"
    }
    return typeof (value);
}

//For the purpose of user debugging.
console.log(detectType(null));

module.exports = detectType