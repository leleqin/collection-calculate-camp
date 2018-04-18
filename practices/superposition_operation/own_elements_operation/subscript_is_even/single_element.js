'use strict';
var single_element = function(collection){
  let result = [];
  let isExist = true;

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
module.exports = single_element;
