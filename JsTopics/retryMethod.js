let a = 1;
const asyncFunc = () => {
  console.log("Async fun called");
};

function retry(asyncFunc, maxRetries, delayMs) {
  let count = 0;
  const funCall = () =>{
  return new Promise((resolve, reject) => {
      if (a > 2) {
        resolve("Resolved promise successfully");
      } else {
        reject("Promise resolved ", count);
        if(count<maxRetries){
          count++;
          setTimeout(()=>{
          funCall()
          },delayMs)
        }
      }
    });
  }
    funCall().then((res)=>{
      console.log("res",res);
    }).catch((err)=>{
      console.log("err",err);
    })
}
retry(asyncFunc, 3, 2000);
