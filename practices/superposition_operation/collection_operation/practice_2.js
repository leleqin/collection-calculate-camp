'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let f = collection.filter(element => element % 2 != 0);
  return f.map(x => x*3+2);
}

module.exports = hybrid_operation_to_uneven;

