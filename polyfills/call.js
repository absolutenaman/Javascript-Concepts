Function.prototype.myCall=function(context,...args){
    if (!context)
        return this.apply(globalThis,args)
    return this.apply(context,args);
}
const obj = {
  name: "Naman",
  print: function (city) {
    console.log(`Hello ${this.name} from ${city}`);
  },
};
obj.print();
const obj2={
    name:"Aadarsh"
}
obj.print.myCall(obj2,"Lucknow");
