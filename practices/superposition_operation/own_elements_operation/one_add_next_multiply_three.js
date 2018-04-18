'use strict';
function one_add_next_multiply_three(collection){
  let n = [];
  for (let i = 0;i<collection.length;i++){
    if (i === collection.length-1)
      collection.pop();
    else
      n.push((collection[i] + collection[i+1])*3);
  }
  return n;
}
module.exports = one_add_next_multiply_three;
