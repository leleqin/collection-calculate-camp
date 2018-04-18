'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let n = collection.sort((a,b) => a-b>0?1:-1);

  for (let i in n){
    if ((i + 1) % 3 === 0){
      let m = n[i - 2];
      n[i-2] = n[i-1];
      n[i-1] = n[i];
      n[i] = m;
    }
  }
  return n;
}
module.exports = rank_by_two_large_one_small;
