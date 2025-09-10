function formatList(items) {
    // your implementation
    let result = "";
    if (typeof(items)!=="object" ||!Array.isArray(items)) {
        throw new TypeError("Input must be an array.");
    }
    for (let i = 0; i < items.length; i++){
        if (i === 0) {
            result += items[i];
        } else if (i < items.length - 1) {
            result += ", "+items[i];
        } else {
            result+=" and "+items[i]
        }
    }
    return result;
}


