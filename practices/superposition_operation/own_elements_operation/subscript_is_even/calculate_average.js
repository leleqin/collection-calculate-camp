'use strict';
var calculate_average = function(collection){

  let n = collection.filter(element => element % 2 == 0);
  let m = n.reduce((x,y) => x+y);
  return m/n.length;
};
module.exports = calculate_average;
