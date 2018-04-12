function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let num = object_b.value;
  let num2 = [];

  for (let i = 0;i < collection_a.length;i++){
    for (let j = 0;j < num.length;j++){
      if (collection_a[i] == num[j]){
        num2.push(collection_a[i]);
      }
    }
  }
  return num2;
}

module.exports = collect_same_elements;
