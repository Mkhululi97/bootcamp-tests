describe("Test My isFromBellville Function", function () {
  it("It should return true when passed string number plate that starts with 'CY'", function () {
    assert.equal(true, isFromBellville("CY"));
  });
  it("It should return true when passed string number plate that starts with 'CY' ", function () {
    assert.equal(true, isFromBellville("CY 123"));
  });
  it("It should return false when passed string number plate that does not start with 'CY'", function () {
    assert.equal(false, isFromBellville("CJ"));
  });
  it("It should return false when passed string number plate that  does not start with 'CY'", function () {
    assert.equal(false, isFromBellville("203 CJ"));
  });
  it("It should return false when passed string number plate that does not start with 'CY'", function () {
    assert.equal(false, isFromBellville("CA 245"));
  });
});
