

/**
 * @param {any} arg
 * @returns {any}
 */
const input = ['BFE.dev', undefined, null, { a: ['BFE.dev', undefined] }];
function undefinedToNull(arg) {
    let result;
    if(Array.isArray(arg)){
        result=[]
    } else {
        result={}
    }
    for(key in arg){
        if(typeof arg[key]==='object' && arg[key]!==null){
            if(Array.isArray(arg[key])){
                result[key]=undefinedToNull(arg[key])
            } else {
                for (const keyx in arg[key]){
                    result[keyx]=undefinedToNull(arg[key][keyx])
                }
            }
        }else {
           if(arg[key]===undefined){
               result[key]=null;
           } else {
               result[key]=arg[key]
           }
        }
    }
    return result
}


console.log(undefinedToNull(input))
