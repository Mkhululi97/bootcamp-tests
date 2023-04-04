describe("Test My transportFee Function", function () {
  it("It should return 'R20' when passed 'morning'", function () {
    assert.equal("R20", transportFee("morning"));
  });
  it("It should return 'R10' when passed 'noon'", function () {
    assert.equal("R10", transportFee("noon"));
  });
  it("It should return 'R20' when passed 'morning, noon, night'", function () {
    assert.equal("R20", transportFee("morning, noon, night"));
  });
  it("It should return 'Invalid shift' when passed ' '", function () {
    assert.equal("Invalid shift", transportFee(""));
  });
  it("It should return 'Free' when passed 'night'", function () {
    assert.equal("free", transportFee("night"));
  });
});
