function myJsonify(value) {
   
    if ( typeof (value) === "boolean" || typeof (value) === "number" ) {
        return  `${value}`
    } else if (typeof (value) === "string")
        return `"${value}"`
    else if (value === null)
    return "null"
    
    if (Array.isArray(value)) {
        let result = []
        value.forEach((item, index) => {
            if (item === undefined || typeof (item) === "function"|| item ===null) {
                result.push("null")
            } else {
                result.push(myJsonify(item));
            }
        })
            return `[${result}]`
    } else {
        let result = [];
        for (const val in value) {
            if (value[val] === undefined || typeof (value[val]) === "function") {
                continue;
            }
            let key;
            let properties;
            if (typeof (val) === "string") {
                key=`${val}`
            } else {
            key = myJsonify(val);
            }
            if (typeof (value[val]) === "string") {
                properties=`"${value[val]}"`
            } else {
            properties = myJsonify(value[val])
            }
            // newObj[key] = properties
            // Object.assign(result,newObj)
            result.push(`"${key}":${properties}`)
        }
    
        return `{${result.join(',')}}`;
    }
}
function JSONStringify(value) {
    // Your implementation 
    if ( typeof (value) === "boolean" || typeof (value) === "number" ||  value === null) {
        return  `${value}`
    } 
    else {
        return myJsonify(value)
    }
}

//For the purpose of user debugging.
console.log(JSONStringify("hello"));
console.log(JSONStringify(45));
console.log(JSONStringify([1, "a", true, null,function (){}]));
console.log(JSONStringify({a:undefined,b:function () {},c:5}))
console.log(JSONStringify({name:"Alice",age:30}))



module.exports = JSONStringify