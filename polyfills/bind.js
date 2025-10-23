// return (...args2)=>obj.fn(...args1,...args2)
const obj1 = {
    name: "Naman",
    age: 22
}
const obj2 = {
    name: "Kanak",
    age: 23
}

function print(material, animal) {
    console.log("Hello", this.name, material, animal)
}

Function.prototype.myBind = function (obj = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error("Invalid type of this")
    }
    obj.fn = this;

    return (...args2) => obj.fn(...args, ...args2)
}
const bindFunction = print.bind(obj1, "Solo-levelling")
bindFunction("cat");
const myBindFunction = print.myBind(obj2, "Solo-levelling")
myBindFunction("cat")