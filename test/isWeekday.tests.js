describe("Test My isWeekday Function", function () {
  it("It should return true when is passed any weekday", function () {
    assert.equal(true, isWeekday("Wednesday"));
  });
  it("It should return true when is passed any weekday", function () {
    assert.equal(true, isWeekday("Friday"));
  });
  it("It should return true when is passed any weekday", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("It should return false when the day passed is not a weekday", function () {
    assert.equal(false, isWeekday("Saturday"));
  });
  it("It should return false when the day passed is not a weekday", function () {
    assert.equal(false, isWeekday("Sunday"));
  });
});
