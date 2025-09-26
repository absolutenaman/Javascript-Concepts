function getResultByPath(path, obj) {
    let arr = [];
    let key = ""
    for (let i = 0; i < path.length; i++) {
        if (path[i] === ".") {
            arr.push(key);
            key = "";
        } else if (path[i] === "[") {
            arr.push(key);
            key = "";
        } else if (path[i] === "]") {
            arr.push(key);
            key = "";
            i++;
        } else {
            key += path[i]
        }
    }
    if (key.length > 0) {
        arr.push(key);
    }
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]===undefined || obj[arr[i]]===null)
            return obj[arr[i]]
        obj = obj[arr[i]]
    }
    return obj;
}

const path = "data.results[0]";
const obj = {
    data: {
        results: [
            {
                status: "completed",
                error: ""
            }, {
                status: [{type: "done"}, {type: "start"}],
                error: ""
            }
        ],
    },
};
console.log(getResultByPath(path, obj));
module.exports = getResultByPath;
/*
results[0].status[1].type
*/