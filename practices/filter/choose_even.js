'use strict';

function choose_even(collection) {

  //在这里写入代码
  //原始方法
  /*let n = [];
  for (let i = 0;i < collection.length;i++ ){
    if (collection[i] % 2 == 0){
      n.push(collection[i]);
    }
  }
return n;*/

  //方法二
  let n = collection.filter(function (x) {
    return x % 2 == 0;
  })
  return n;
}

module.exports = choose_even;
