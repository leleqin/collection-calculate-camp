function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_same = [];
  var key_value = "";
  var count_value = 0;

  for(var i = 0; i < collection_a.length;i++){
    collection_a.forEach(item =>{
      if(item != -1){
        key_value = item;
        var keyCountObj = isExist( collection_a,key_value, count_value);
        collection_same.push(keyCountObj);
        count_value = 0;
      }
    })

  }
  for (var index in collection_same){
    for(var index_b in object_b.value){
      if(collection_same[index].key === object_b.value[index_b]){
        collection_same[index].count-=Math.floor((collection_same[index].count)/3);
      }
    }
  }

  return collection_same;
}

function isExist(collection_a,key_value, count_value) {
  for (var j = 0; j < collection_a.length; j++) {
    if (key_value === collection_a[j]) {
      count_value++;
      collection_a[j] = -1;
    }
  }
  var keyCountObj = {key: key_value, count: count_value};
  return keyCountObj;

}

module.exports = create_updated_collection;
