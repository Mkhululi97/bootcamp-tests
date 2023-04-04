describe("Test My totalPhoneBill Function", function () {
  it("Should return total phone bill based on how many calls and/or sms were made", function () {
    assert.equal(
      "R15.05",
      totalPhoneBill("call, sms, call, call, call, sms, call")
    );
  });
  it("Should return total phone bill based on how many calls and/or sms were made", function () {
    assert.equal("R13.75", totalPhoneBill("call, call, call, call, call"));
  });
  it("Should return total phone bill based on how many calls and/or sms were made", function () {
    assert.equal("R6.00", totalPhoneBill("sms, sms, sms, call, sms, sms"));
  });
  it("Should return total phone bill based on how many calls and/or sms were made", function () {
    assert.equal("R1.95", totalPhoneBill("sms, sms, sms"));
  });
});
