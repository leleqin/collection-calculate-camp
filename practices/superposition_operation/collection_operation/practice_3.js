'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let f = collection.filter(element => element % 2 != 0);
  let m = f.map(x => x*3+5);
  return m.reduce((x,y) => x+y);
}

module.exports = hybrid_operation_to_uneven;

