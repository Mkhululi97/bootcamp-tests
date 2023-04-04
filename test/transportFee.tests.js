describe("Test My transportFee Function", function () {
  it("returns the amount needed for transport, when working a morning, noon, night shift", function () {
    assert.equal("R20", transportFee("morning"));
  });
  it("returns the amount needed for transport, when working a morning, noon, night shift", function () {
    assert.equal("R10", transportFee("noon"));
  });
  it("returns the amount needed for transport, when working a morning, noon, night shift", function () {
    assert.equal("R20", transportFee("morning, noon, night"));
  });
  it("returns 'Invalid shift' if string passed is not morning, noon, night", function () {
    assert.equal("Invalid shift", transportFee(""));
  });
  it("returns free if string passed is night", function () {
    assert.equal("free", transportFee("night"));
  });
});
