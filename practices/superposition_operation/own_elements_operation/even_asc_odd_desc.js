'use strict';
var even_asc_odd_desc = function(collection){
  let n = collection.filter(element => element % 2 === 0);
  let n2 = n.sort((a,b) => a - b > 0?1:-1);
  let m = collection.filter(element => element % 2 != 0);
  let m2 = m.sort((a,b) => a - b > 0?1:-1).reverse();
  return n2.concat(m2);
};
module.exports = even_asc_odd_desc;
