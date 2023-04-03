describe("Test My isWeekday Function", function () {
  it("It should return true when is passed 'Wednesday'", function () {
    assert.equal(true, isWeekday("Wednesday"));
  });
  it("It should return true when is passed 'Friday'", function () {
    assert.equal(true, isWeekday("Friday"));
  });
  it("It should return true when is passed 'Monday'", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("It should return true when is passed 'Saturday'", function () {
    assert.equal(false, isWeekday("Saturday"));
  });
  it("It should return false when is passed 'Sunday'", function () {
    assert.equal(false, isWeekday("Sunday"));
  });
});
