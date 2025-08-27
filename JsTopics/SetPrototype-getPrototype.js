function Person(name,height){
    this.name=name;
    this.height=height;
}
Person.prototype.sayHello=function (){
    console.log("hi my name is ",this.name)
}
naman=new Person("Naman","5'11")
console.log(Object.getPrototypeOf(naman));//is recommended by js and can be used the same way as __proto__ to get
// the methods added to an object in later part of code


//setProtype of sets the prototype object of the provided object

const child=function (name){
    name=this.name
}
const parent=function (age){
    age=this.age
}
const parentObj=new parent(100)
const childObj=new child("rhea")
Object.setPrototypeOf(parentObj,childObj)
parentObj.name="ritul"
console.log(parentObj)


//hasownproperty tells if an object has the property by inheritence or added later in life by prototype

console.log(naman.hasOwnProperty("sayHello"))
console.log(naman.hasOwnProperty("name"))
console.log(Object.hasOwn(naman,"name"))
