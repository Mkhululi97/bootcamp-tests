describe("Test My Greet Function", function () {
  it("it should return 'Hello, Mkhululi, when called with Mkhululi'", function () {
    assert.equal(`Hello, Mkhululi`, greet("Mkhululi"));
  });
  it("it should return 'Hello, Palesa, when called with Palesa'", function () {
    assert.equal(`Hello, Palesa`, greet("Palesa"));
  });
  it("it should return 'Hello, Akhona, when called with Akhona'", function () {
    assert.equal(`Hello, Akhona`, greet("Akhona"));
  });
});
