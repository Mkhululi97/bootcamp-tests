function totalPhoneBill(callOrSms) {
  let counter = 0;
  let sms = 0.65;
  let call = 2.75;
  let strArr = callOrSms.split(",");
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].trim().includes("sms")) {
      counter += sms;
    } else if (strArr[i].trim().includes("call")) {
      counter += call;
    }
  }
  var totalBill = counter.toFixed(2);
  return "R" + totalBill;
}
