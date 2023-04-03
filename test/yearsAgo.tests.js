describe("Test My yearsAgo Function", function () {
  it("It should return 13 when passed '2010'", function () {
    assert.equal(13, yearsAgo(2010));
  });
  it("It should return 23 when passed '2000'", function () {
    assert.equal(23, yearsAgo(2000));
  });
  it("It should return 73 when passed '1950'", function () {
    assert.equal(73, yearsAgo(1950));
  });
  it("It should return 36 when passed '1987'", function () {
    assert.equal(36, yearsAgo(1987));
  });
});
