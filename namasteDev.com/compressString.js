function compressString(str) {
  //write implementation here
  let result = "";

  for (let i = 0; i < str.length;i++){
    let count = 0;
    for (let j = i; j < str.length; j++){
      if (str[i] !== str[j]) {
        break;
      }
      else if (str[i] === str[j]) {
        count++;
      }
        i = j;
    }
    if (count == 1) {
      result += str[i];
    }
    else if (count > 0 && count <= 9) {
      result += str[i];
      result += count;
    } else {
      while (count > 9) {
        result += str[i] + "9";
        count = count - 9;
      }
      if (count != 0) {
        result += str[i];
        result += count % 9;
      }
    }
  
  }
  return result;
}

compressString("aaabbbccccccccccc")
module.exports = compressString;