describe("Test My totalPhoneBill Function", function () {
  it("It should return R15.05 when passed 'call, sms, call, call, call, sms, call'", function () {
    assert.equal(
      "R15.05",
      totalPhoneBill("call, sms, call, call, call, sms, call")
    );
  });
  it("It should return R13.75 when passed 'call, call, call, call,call'", function () {
    assert.equal("R13.75", totalPhoneBill("call, call, call, call, call"));
  });
  it("It should return R6.00 when passed 'sms, sms, sms, call, sms, sms'", function () {
    assert.equal("R6.00", totalPhoneBill("sms, sms, sms, call, sms, sms"));
  });
  it("It should return R1.95 when passed 'sms, sms, sms'", function () {
    assert.equal("R1.95", totalPhoneBill("sms, sms, sms"));
  });
});
