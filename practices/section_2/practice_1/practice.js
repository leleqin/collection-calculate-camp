function count_same_elements(collection) {
  //在这里写入代码
  let m = new Map();
  let count;
  for (let i = 0;i < collection.length;i++){
    if (collection[i]=="a"){
      count++;
      m.set("a",count);
    }
  }
  console.log("key:"+m.get("a")+"count:"+count);
}

module.exports = count_same_elements;
