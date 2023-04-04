function mostProfitableDepartment(salesData) {
  var sectionMap = {};
  var netSale = 0;
  var topSection = "";
  for (var i = 0; i < salesData.length; i++) {
    var inventory = salesData[i];
    var keySection = inventory.department;
    var valueSection = inventory.sales;
    sectionMap[keySection] = valueSection;
    for (var section in sectionMap) {
      if (valueSection > netSale) {
        netSale = sectionMap[section];
        topSection = section;
      }
    }
  }
  return topSection;
}
