'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let n = [];
  let index = number * 10;
  interval *= 10;

  n.push(number);
  while(index > interval){
    n.push((index-interval)/10);
    index -= interval;
  }

  if(number % interval == 0)
    return n;

  n.push((index - interval)/10);

  return n;

}

module.exports = spilt_to_zero;
