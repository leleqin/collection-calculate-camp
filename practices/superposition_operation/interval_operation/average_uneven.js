'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let f = collection.filter(element => element % 2 != 0);
  return f.reduce((x,y) => x+y)/f.length;
}

module.exports = average_uneven;
