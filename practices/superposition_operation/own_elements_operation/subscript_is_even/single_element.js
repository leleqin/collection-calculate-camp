'use strict';
var single_element = function(collection){

  collection.unshift("");
  let n = [];
  for (let i = 0;i < collection.length;i++){
    n.push(collection[i % 2 === 0]);
  }

  return n.filter(element => m(n,element));


}
module.exports = single_element;
