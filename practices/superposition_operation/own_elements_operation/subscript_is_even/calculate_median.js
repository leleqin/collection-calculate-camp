'use strict';
var calculate_median = function(collection){

  let n = collection.filter(element => element % 2 == 0).sort();
  return n.length % 2 == 0 ? (n[n.length/2] + n[n.length/2-1])/2 : n[Math.floor(n.length/2)];
};
module.exports = calculate_median;
