'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let n = [];
  for (let element of collection){
    if(element % 2 == 0){
      n.push(element);
    }
  }
  return n[n.length-1];
}

module.exports = find_last_even;
