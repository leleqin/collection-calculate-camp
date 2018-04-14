'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(element => divisible(collection_b, element))
}
function divisible(collection, element) {
  return collection.some(t => element % t === 0);
  }


module.exports = choose_divisible_integer;
