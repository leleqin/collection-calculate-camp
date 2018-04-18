'use strict';

function amount_even(collection) {

  //在这里写入代码
let f = collection.filter(element => element % 2 == 0);
return f.reduce((x,y) => x+y);
}

module.exports = amount_even;
