const obj1 = {
    name: "Naman",
    print :function(city,country){
        console.log(`Hello ${this.name} from ${city} in ${country}`)
    }
}
const obj2 = {
    name: "Kanak",
}

Function.prototype.myBind = function(context,args){
    if(!context)
        context=globalThis
    return ()=> {
        return this.call(context,args)
    };
}

const bindFunction = obj1.print.myBind(obj1)
bindFunction("Lucknow","India");
