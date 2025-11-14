Function.prototype.myCall = function (context, ...args) {
    // If context is null or undefined, default to global object (window / globalThis)
    context = context || globalThis;

    // Create a unique property on the context
    const fnSymbol = Symbol();

    // Assign the function (this) to that property
    context[fnSymbol] = this;

    // Use apply to invoke the function with provided args
    const result = context[fnSymbol].apply(context, args);

    // Clean up the temporary property
    delete context[fnSymbol];

    return result;
};
