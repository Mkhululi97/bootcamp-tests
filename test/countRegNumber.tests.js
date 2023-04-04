var regCount = countRegNumber("CA 182736, CA 42665, AA 12 RT GP, NLF 567 MP");
assert.equal(regCount, 4);
var regCount = countRegNumber("AA 12 RT GP, NLF 567 MP");
assert.equal(regCount, 2);

describe("Test My countRegNumber Function", function () {
  it("returns the total number of registrations passed to the function.", function () {
    assert.equal(2, countRegNumber("AA 12 RT GP, NLF 567 MP"));
  });
  it("returns the total number of registrations passed to the function.", function () {
    assert.equal(1, countRegNumber(""));
  });
  it("returns the total number of registrations passed to the function.", function () {
    assert.equal(
      4,
      countRegNumber("CA 182736, CA 42665, AA 12 RT GP, NLF 567 MP")
    );
  });
});
