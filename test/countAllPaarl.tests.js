describe("Test My countAllPaarl Function", function () {
  it("It should return 5 when passed 'CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120'", function () {
    assert.equal(
      5,
      countAllPaarl("CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120")
    );
  });
  it("It should return 2 when passed 'CJ 012, 050 CJ, CJ 008, 334 CA'", function () {
    assert.equal(2, countAllPaarl("CJ 012, 050 CJ, CJ 008, 334 CA"));
  });
  it("It should return 0 when passed 'CA 012, 050 CJ, GP 008, 334 MP'", function () {
    assert.equal(0, countAllPaarl("CA 012, 050 CJ, GP 008, 334 MP"));
  });
});
