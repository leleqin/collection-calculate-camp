'use strict';

function compute_average(collection) {
  //在这里写入代码
  let n = collection.reduce((x,y) => x+y);
  let m = n/collection.length;
  return m;
}

module.exports = compute_average;

