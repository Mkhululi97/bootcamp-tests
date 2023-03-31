describe("Test For regCheck Function", function () {
  it("It should return true when is passed with 'MV 34 YL GP'", function () {
    assert.equal(true, regCheck("MV 34 YL GP", "GP"));
  });
  it("It should return true when is passed with 'ERT 344 GP'", function () {
    assert.equal(true, regCheck("ERT 344 GP", "GP"));
  });
  it("It should return true when is passed with 'MTE 314 CA'", function () {
    assert.equal(true, regCheck("MRE 314 CA", "CA"));
  });
  it("It should return false when is passed with 'CA MTE 314'", function () {
    assert.equal(false, regCheck("CA MTE 314", "CA"));
  });
  it("It should return false when is passed with 'EC MT 14 NM'", function () {
    assert.equal(false, regCheck("EC MT 14 NM", "EC"));
  });
});
