describe("Test My regCheck Function", function () {
  it("It should return true when passed a number plate that ends with the provided input string", function () {
    assert.equal(true, regCheck("MV 34 YL GP", "GP"));
  });
  it("It should return true when passed a number plate that ends with the provided input string", function () {
    assert.equal(true, regCheck("ERT 344 GP", "GP"));
  });
  it("It should return true when passed a number plate that ends with the provided input string", function () {
    assert.equal(true, regCheck("MRE 314 CA", "CA"));
  });
  it("It should return false when passed a number plate that ends with the provided input string", function () {
    assert.equal(false, regCheck("CA MTE 314", "CA"));
  });
  it("It should return false when passed a number plate that ends with the provided input string", function () {
    assert.equal(false, regCheck("EC MT 14 NM", "EC"));
  });
});
