'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let n = collection.filter(x=> {
    return x % 3 == 0;
  })
  return n;
}

module.exports = choose_multiples_of_three;
