describe("Test My fromWhere Function", function () {
  it("It should return 'Cape Town' when passed a 'CA' number plate", function () {
    assert.equal("Cape Town", fromWhere("CA 987504"));
  });
  it("It should return 'Bellville' when passed a 'CY' number plate", function () {
    assert.equal("Bellville", fromWhere("CY 567489"));
  });
  it("It should return 'Some other place!' when not passed 'CY','CJ', 'CA' number plates", function () {
    assert.equal("Some other place!", fromWhere("ZN 345-890"));
  });
});
