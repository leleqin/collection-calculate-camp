'use strict';
var number_map_to_word_over_26 = function(collection){
  let n = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let m = [];
  // for (let i = 0;i < collection.length;i++){
  //   if (collection[i] % 26 === 0) {
  //     m.push(n[Math.floor(collection[i] / 26) - 1].concat(n[26]));
  //   } else {
  //     m.push(n[Math.floor(collection[i] / 26)].concat(n[collection[i] % 26]));
  // }
  collection.map(item =>
    item % 26 === 0 ? m.push(n[Math.floor(item / 26) - 1].concat(n[26]))
      : m.push(n[Math.floor(item / 26)].concat(n[item % 26])));

  return m;
}

module.exports = number_map_to_word_over_26;
