function findItemsOver(list, threshold) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
    //console.log(list[i].qty);
    if (list[i].qty > threshold) {
      results.push(list[i]);
    }
  }
  return results;
}
