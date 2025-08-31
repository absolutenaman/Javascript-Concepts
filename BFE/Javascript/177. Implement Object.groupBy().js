/*
Object.groupBy() allows us to easily group array items, please try to implement it by yourself.
 */
const items = [
    {
        id: 1,
        kind: 'a',
    },
    {
        id: 2,
        kind: 'b',
    },
    {
        id: 3,
        kind: 'a',
    }
]
const groups = Object.groupBy(items, ({kind}) => kind)
// {
//   a: [
//     {
//       id: 1,
//       kind: 'a'
//     },
//     {
//       id: 3,
//       kind: 'a'
//     }
//   ],
//   b: [
//     {
//       id: 2,
//       kind: 'b'
//     }
//   ]
// }
function ObjectGroupBy(items, callback) {
    if (!Array.isArray(items)) {
        throw new TypeError('First argument must be an array');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('Second argument must be a function');
    }
    let result=Object.create(null)
    for(let i=0;i<items.length;i++){
        const key=callback(items[i]);
        if(!result[key]){
            result[key]=[]
        }
        result[key].push(items[i]);
    }
    return result
}



console.log(ObjectGroupBy([0, 1, 2, 3, 4, 5], (item) => item % 2 === 0 ? 'even' : 'odd'))

