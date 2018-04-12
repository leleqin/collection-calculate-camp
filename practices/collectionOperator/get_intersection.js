'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let num = [];
  for(let i = 0;i < collection_b.length;i++){
    for(let j = 0;j < collection_a.length;j++){
      if(collection_a[j] == collection_b[i]){
        num.push(collection_b[i]);
      }
    }
  }
  return num;
}

module.exports = get_intersection;
