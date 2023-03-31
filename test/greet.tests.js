describe("Test My Greet Function", function () {
  it("it should return 'Hello, Mkhululi, when called with Mkhululi'", function () {
    assert.equal(`Hello, mkhululi`, greet("Mkhululi"));
  });
  it("it should return 'Hello, Mkhululi, when called with Mkhululi'", function () {
    assert.equal(`Hello, mkhululi`, greet("mkululi"));
  });
  it("it should return 'Hello, Mkhululi, when called with Mkhululi'", function () {
    assert.equal(`Hello, mkhululi`, greet(""));
  });
  it("it should return 'Hello, Mkhululi, when called with Mkhululi'", function () {
    assert.equal(`Hello, mkhululi`, greet("Mkhulul1"));
  });
});
