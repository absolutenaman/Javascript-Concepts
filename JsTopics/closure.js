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

/*According to W3Schools, a closure in JavaScript is a function that 
retains access to its parent scope even after 
the parent function has finished executing.
*/