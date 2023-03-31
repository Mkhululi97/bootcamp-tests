describe("Test My isFromBellville Function", function () {
  it("It should return true when is passed 'CY'", function () {
    assert.equal(true, isFromBellville("CY"));
  });
  it("It should return true when is passed 'CY 123'", function () {
    assert.equal(true, isFromBellville("CY 123"));
  });
  it("It should return false when is passed 'CJ'", function () {
    assert.equal(false, isFromBellville("CJ"));
  });
  it("It should return false when is passed '203 CJ'", function () {
    assert.equal(false, isFromBellville("203 CJ"));
  });
  it("It should return false when is passed 'CA 245'", function () {
    assert.equal(false, isFromBellville("CA 245"));
  });
});
