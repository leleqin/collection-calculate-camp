'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let num = [];
  for(let i = 0;i < collection_a.length;i++){
    for(let j = 0;j < collection_b.length;j++){
      if(collection_a[i] == collection_b[j]){
        num.push(collection_a);
      }
    }
  }
  return num;
}

module.exports = get_intersection;
