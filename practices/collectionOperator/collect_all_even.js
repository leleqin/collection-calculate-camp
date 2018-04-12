'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let ou = [];
  for(let i = 0;i < collection.length;i++){
    if(collection[i] % 2 == 0){
      ou.push(collection[i]);
    }
  }
  return ou;
}

module.exports = collect_all_even;
