function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let num = [];
  let num1 = [];
  for (let i = 0;i < collection_a.length;i++){
      num1 = collection_a[i].key;
  }
  let num2 = object_b.value;
  for (let i = 0;i < num1.length;i++){
    for (let j = 0;j < num2.length;j++){
      if (num1[i] == num2[j]){
        num.push(num1[i]);
      }
    }
  }
  return num;
}

module.exports = collect_same_elements;
