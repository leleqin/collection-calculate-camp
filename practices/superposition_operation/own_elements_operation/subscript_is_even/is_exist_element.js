'use strict';
var is_exist_element = function(collection,element){

return collection.indexOf(element) % 2 == 0?true:false;
};
module.exports = is_exist_element;
