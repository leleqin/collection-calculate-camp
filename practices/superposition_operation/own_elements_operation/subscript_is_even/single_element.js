'use strict';
var single_element = function(collection){
  let result = [];
  let isExist = true;

<<<<<<< HEAD
  collection.unshift("");
  let n = [];
  for (let i = 0;i < collection.length;i++){
    n.push(collection[i % 2 === 0]);
  }

  return n.filter(element => m(n,element));


}
=======
  for (let outerIndex = 1; outerIndex < collection.length; outerIndex += 2) {
    for (let innerIndex = 1; innerIndex < collection.length; innerIndex += 2) {
      if (collection[outerIndex] === collection[innerIndex] && outerIndex !== innerIndex) {
        isExist = false;
      }
    }
    if (isExist) result.push(collection[outerIndex]);
    isExist = true;
  }

  return result;
};
>>>>>>> 4c6d4003b807bf0237a58b6bf2076035238fda2f
module.exports = single_element;
