'use strict';

function compute_median(collection) {
  //在这里写入代码
  let n = collection.sort((a,b) => a - b > 0 ? 1:-1);

  if (n.length % 2 !== 0)
    return n[parseInt(n.length / 2)];
   else
     return (parseInt(n[n.length / 2 - 1]) + parseInt(n[n.length / 2])) / 2;
}

module.exports = compute_median;


