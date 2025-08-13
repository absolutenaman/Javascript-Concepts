nums=[{
    age:13,
    name:"naman"
},{
    age:14,
    name:"himanshu"
},{
    age:15,
    name:"priyam"
},{
    age:11,
    name:"pranjal"
}]

Array.prototype.myFind=function(callback){
    if(!callback){
        console.log("callback cannot be empty");
        return 
    }
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i];
        }
    }
    return undefined;
}
result=nums.myFind((item,index,nums)=>{
    return item?.age >12;
})
console.log(result);
