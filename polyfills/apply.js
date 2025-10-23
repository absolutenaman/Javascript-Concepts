//obj.fn(...args),args=[]
const obj1 = {
    name: "Naman",
    age: 23,
}
const obj2 = {
    name: "Kanak",
    age: 24
}

function print(material,tusk) {
    console.log("Hello", this.name, material,tusk)
}

Function.prototype.myApply = function (obj = {},args=[]) {
    obj.fn = this;
    if(!Array.isArray(args))
    {
        throw new Error("Invalid type of argument")
    }
    obj.fn(...args)
    delete obj.fn
}
print.myApply(obj1, ["mangoes","elephant"])
print.apply(obj1, ["mangoes","elephant"])
