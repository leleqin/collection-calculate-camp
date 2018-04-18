'use strict';

function average_to_letter(collection) {
  let n = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let m = collection.reduce((x,y) => x+y);
  return n[Math.ceil(m/collection.length)];
  //在这里写入代码
}

module.exports = average_to_letter;

