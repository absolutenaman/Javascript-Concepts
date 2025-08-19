In JavaScript, a Temporal Dead Zone (TDZ) refers to the period between entering a scope (e.g., a block of code enclosed in curly braces {}) and 
the actual declaration of a variable using let or const within that scope. During this period, the variable exists in the scope but cannot be accessed, 
and attempting to do so will result in a ReferenceError