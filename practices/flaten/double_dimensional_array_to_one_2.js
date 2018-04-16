'use strict';

function double_to_one(collection) {

  let l = [].concat.apply([],collection);
  return l.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  //在这里写入代码
}

module.exports = double_to_one;
