function countAllPaarl(strWithRegis) {
  var countPaarlRegis = 0;
  var arrWithStrRegis = strWithRegis.split(",");
  for (var i = 0; i < arrWithStrRegis.length; i++) {
    if (arrWithStrRegis[i].trim().startsWith("CJ")) {
      countPaarlRegis++;
    }
  }
  return countPaarlRegis;
}
