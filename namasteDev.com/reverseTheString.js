function reverseWords(s) {
    const arr = s.split(" ")
    let ans = []
    for (let i = arr.length - 1; i >= 0; i--){
        if(arr[i].trim().length>0)
            ans.push(arr[i].trim())
    }
    return(ans.join(" ").trim())

}

reverseWords("a good       is blue")

module.exports = reverseWords;
