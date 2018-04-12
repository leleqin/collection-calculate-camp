'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let n = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let m = [];
  if(number_a < number_b){
    for(let l=number_a;l<=number_b;l++) {
      if (l % 26 === 0) {
        m.push(n[Math.floor(l / 26) - 1].concat(n[26]));
      } else {
        m.push(n[Math.floor(l / 26)].concat(n[l%26]));
      }
    }
  }else if(number_a > number_b){
    for(let l=number_a;l>=number_b;l--) {
      if (l % 26 === 0) {
        m.push(n[Math.floor(l / 26) - 1].concat(n[26]));
      } else {
        m.push(n[Math.floor(l / 26)].concat(n[l%26]));
      }
    }
  }else  if (number_a = number_b){
    if (number_a % 26 === 0) {
      m.push(n[Math.floor(number_a / 26) - 1].concat(n[26]));
    } else {
      m.push(n[Math.floor(number_a / 26)].concat(n[number_a%26]));
    }
  }
  return m;
}
module.exports = get_letter_interval_2;

