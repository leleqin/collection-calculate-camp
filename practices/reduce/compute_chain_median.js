'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let n = collection.split("->");
  //注意sort排序
  n.sort((a, b) => a - b > 0 ? 1 : -1);
  if (n.length % 2 == 0)
    //注意字符串转数字！
   return (parseInt(n[n.length / 2 -1] )+ parseInt(n[n.length / 2])) / 2;
  else
   return  n[(Math.ceil(n.length/2))-1];

  }

module.exports = compute_chain_median;
