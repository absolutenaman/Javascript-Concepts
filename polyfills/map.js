var nums=[1,2,3,4,5]



Array.prototype.myMap=function(callback){
    if(!callback){
        console.log("Cannot call map method on undefined callback function")
        return
    }
    var arr =[this.length]
    for(let i=0;i<this.length;i++){
        arr[i]=callback(this[i])
    }
    return arr;
}

var updatedArray =nums.myMap((item)=>{
    return item *2;
})

console.log(updatedArray);
