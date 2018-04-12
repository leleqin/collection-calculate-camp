'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let n = ["","a","b","c","d","e"];
  let m = [];
  if (number_a < number_b){
    for (let i = number_a;i <= number_b;i++){
      m.push(n[i]);
    }
  }else if (number_a > number_b){
    for (let i = number_a;i >= number_b;i--){
      m.push(n[i]);
    }
  }else if (number_a == number_b){
    m.push(n[number_a]);
  }
  return m;
}

module.exports = get_letter_interval;
