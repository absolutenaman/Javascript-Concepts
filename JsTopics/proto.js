/*
proto is used in debbuging to get to know that which variabled or functions are inheriently associated with
the object and which are added later on using prototype

 */

function Person(name,height){
    this.name=name;
    this.height=height;
}
const naman=new Person("Naman","5'11")
Person.prototype.sayHello=function (){
    console.log("Hello my name is",this.name);
}
Person.prototype.age=14;
naman.sayHello();
console.log(naman)
console.log(naman.__proto__);// only for debugging and not recommended by js

console.log(Object.getPrototypeOf(naman));//is recommended by js and can be used the same way as __proto__


