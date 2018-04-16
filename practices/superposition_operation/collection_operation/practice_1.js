'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let m = collection.map(element => element*3+2);
  return m.reduce((x,y) => x+y);
}

module.exports = hybrid_operation;

