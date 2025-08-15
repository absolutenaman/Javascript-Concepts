function main() {
    let x=10;
    console.log("parent scope",x); 
    return function (...args){
        x=x+1;
        console.log(x);
    }
}
result=main()
result()
result()
result()
result()

//output -> 
// parent scope 10
// 11
// 12
// 13
// 14
// To be confirmed on web browser also