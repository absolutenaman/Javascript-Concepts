nums =[1,2,3,4,5]



Array.prototype.myReduce=function(callback,initialValue){
     if(!callback){
        console.log("callback cannot be empty");
        return 
    }
    var result=initialValue;
    for(let i=0;i<this.length;i++){
        result+=this[i]
    }
    return result
}

result=nums.myReduce((accumulator,item,index,nums)=>{
    return accumulator+item;
},0)
console.log(result);