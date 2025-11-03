const apiCall=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Api resoloved successfully")
    },2000)
});

apiCall.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

