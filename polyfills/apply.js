const obj={
    name:"Naman",
    print:function(city,country){
        console.log(`Hello ${this.name} from ${city} in ${country}`);
    }
}
Function.prototype.myApply=function(context,args){
    if(!context)
        context=globalThis;
    if(!Array.isArray(args)){
        throw new Error("invalid call")
    }
    return this.call(context,...args);// imp
}
const obj2={
    name:"Aadarsh"
}
obj.print.myApply(obj2,["Lucknow","India"])