describe("Test My countAllPaarl Function", function () {
  it("Returns total number of registrations that are from paarl", function () {
    assert.equal(
      5,
      countAllPaarl("CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120")
    );
  });
  it("Returns total number of registrations that are from paarl", function () {
    assert.equal(2, countAllPaarl("CJ 012, 050 CJ, CJ 008, 334 CA"));
  });
  it("Returns total number of registrations that are from paarl", function () {
    assert.equal(0, countAllPaarl("CA 012, 050 CJ, GP 008, 334 MP"));
  });
});
