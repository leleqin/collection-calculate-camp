'use strict';

module.exports = median_to_letter;

function median_to_letter(collection) {
  let n = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let r = collection.sort();
  if (r.length % 2 == 0){
    let m = Math.ceil((r[r.length/2]+r[r.length/2-1])/2);
    return n[Math.floor(m / 26)].concat(n[m % 26]);
  }
  else{
    let m = r[Math.ceil(r.length/2)];
    return n[Math.floor(m / 26) - 1].concat(n[26]);
  }
  //在这里写入代码
}
