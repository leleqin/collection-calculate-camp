'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection[collection.sort().length-1];
}

module.exports = collect_max_number;
