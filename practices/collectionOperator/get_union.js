'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  collection_b.map(
        item =>
    {
        if (!collection_a.includes(item)){
          collection_a.push(item);
        }
    }
  );

  return collection_a;

}

module.exports = get_union;

