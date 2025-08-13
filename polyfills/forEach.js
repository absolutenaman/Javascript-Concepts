var nums=[1,2,3,4,5]



Array.prototype.myForEach=function(callback){
    if (!callback){
        console.log("function cannot be undefined")
        return
    } 
    for (let i=0;i<this.length;i++){
        callback(this[i])
    }
}

nums.myForEach((item)=>{
    console.log(item);
})