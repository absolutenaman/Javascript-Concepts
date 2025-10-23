//obj.fn(...args)

Function.prototype.myCall = function (obj = {}, ...args) {
    obj.fn = this
    obj.fn(...args)
    delete obj.fn;
}

let name = "Rhea"

function print(material) {
    console.log("Hi ", this.name, material)
}

let obj1 = {
    name: "naman",
    age: 23
}
let obj2 = {
    name: "kanak",
    age: 23
}


print.myCall(obj1, "coal")