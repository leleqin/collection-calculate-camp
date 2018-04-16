'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let n = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let m = [];
  collection.map(element => {
    if (element % 2 == 0)
      m.push(n[element]);
  });
  return m;
}

module.exports = even_to_letter;
