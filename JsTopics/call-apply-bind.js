/*
The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument
which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the
bind method then they are passed as an argument to the new function when the new function is called.
The Call() Method calls the function directly and sets this to the first argument passed to the call
method and if any other sequences of arguments preceding the first argument
are passed to the call method then they are passed as an argument to the function.
The Apply() Method calls the function directly and sets this to the first argument passed to the
apply method and if any other arguments provided as an
array are passed to the call method then they are passed as an argument to the function.
*/

var pokemon={
    name:"Pikachu",
    print:function(stmt){
        console.log(this.name + (stmt || "is a good pokemon"))
    }
}
var jigglyPuffFunc={
    name:"jigglyPuff"
}
pokemon.print.call(jigglyPuffFunc," is a sleepy pokemon");
pokemon.print.apply(jigglyPuffFunc,[" is a fat pokemon"])
bindedPokemonMethod=pokemon.print.bind(jigglyPuffFunc," is a sleepy pokemon")
bindedPokemonMethod()
pokemon.print()



