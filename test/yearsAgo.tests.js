describe("Test My yearsAgo Function", function () {
  it("Return number of years between current year and year used to call the function", function () {
    assert.equal(13, yearsAgo(2010));
  });
  it("Return number of years between current year and year used to call the function", function () {
    assert.equal(23, yearsAgo(2000));
  });
  it("Return number of years between current year and year used to call the function", function () {
    assert.equal(73, yearsAgo(1950));
  });
  it("Return number of years between current year and year used to call the function", function () {
    assert.equal(36, yearsAgo(1987));
  });
});
