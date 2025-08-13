function foo(age) {
  console.log(`${this.name}'s age is ${age}`);
}

var p1 = {
  name: "Rajat",
};
var p2={
    name:"Naman"
}


Function.prototype.myCall=function(context,...args){
    context.currFunction=this;
    context.currFunction(...args)
}

foo.myCall(p1, 18);
foo.myCall(p2, 18);