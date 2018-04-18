'use strict';

function double_to_one(collection) {
/*
  let n = [];
  n.push(collection[0]);
  let m = collection[1];
  n.push(m[0]);
  let l = collection[2];
  n.push(l[0]);
  n.push(l[1]);
  return n;*/

   return [].concat.apply([],collection);


  //在这里写入代码
}

module.exports = double_to_one;
