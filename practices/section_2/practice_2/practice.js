
function count_same_elements(collection) {
  //在这里写入代码
  let result = [];

  collection.forEach((element, index) => {
    const item = element.split("-");
    if (item.length > 1) {
      collection.splice(index, 1);
      for (let i = 0; i < item[1]; i++) {
        collection.push(item[0]);
      }
    }
  });

  collection.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection.filter(element => element === item).length});
  });

  return result;
}
module.exports = count_same_elements;
