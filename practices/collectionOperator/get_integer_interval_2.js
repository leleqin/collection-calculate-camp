'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let n = [];
  if(number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        n.push(i);
      }
    }
  }else if(number_a < number_b){
    for (let i = number_a;i <= number_b;i++){
      if (i % 2 == 0){
        n.push(i);
      }
    }
  }else if (number_a == number_b){
    if(number_a % 2 == 0){
      n.push(number_a);
    }else {
      console.log(n);
    }
    }
    return n;



  /*
  let n1 = [];
  for (let i = number_a;i <= number_b;i++){
    if (i % 2 == 0){
      n1.push(i);
    }
  }
  return n1;

   let n2 = [];
   for (let i = number_a;i >= number_b;i--){
     if (i % 2 == 0){
       n2.push(i);
     }
   }
   return n2;

   let n3 = [];
   if(number_a % 2 == 0){
     n3.push(number_a);
   }
   return n3;

   let n4 = [];
   if(number_a % 2 == 0){
     n4.push(number_a);
   }else {
     console.log(n4);
   }
   return n4;
*/

}

module.exports = get_integer_interval_2;
