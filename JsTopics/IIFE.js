// IIFE -> Immediately invoked function expression

result=(()=>{
    var counter=0;
    return ()=>{
        counter+=1;
        console.log(counter);
    }
})()

result()
result()
result()
result()


// Using parameters in IIFE 
creditsCalculator=((initialCredits)=>{
    credits=initialCredits;
    return (()=>{
        if(credits==0)
        {
            console.log("Credits left",credits);
            return
        }
        credits--;
        console.log("One credit used for playing the game,credits left =",credits);
    })
})(3)
creditsCalculator();
creditsCalculator();
creditsCalculator();
creditsCalculator();



