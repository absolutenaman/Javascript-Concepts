var nums=[1,2,3,4,5]

Array.prototype.myFilter =function(callback){
   if(!callback)
   {
      console.log("callback cannot be undefined");
      return;
   }
   var resultArr=[]
   for(let i=0;i<this.length;i++){
      if(callback(this[i],i,this)){
         resultArr.push(this[i]);
      }
   }
   return resultArr
}

console.log( nums.myFilter((item)=>{
  return item%2===0
}))




