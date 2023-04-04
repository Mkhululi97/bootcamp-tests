function findItemsOver20(list) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
    //console.log(list[i].qty);
    if (list[i].qty > 20) {
      results.push(list[i]);
    }
  }
  //console.log(results);
  return results;
}
