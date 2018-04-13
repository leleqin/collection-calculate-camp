'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let count = {};
  collection.map(element=>{
    if (count[element] != undefined){
      ++count[element];
    }else {
      count[element] = 1;
    }
  });
  return count;

}

module.exports = grouping_count;
