describe("Test My Greet Function", function () {
  it("returns a greeting message, with the persons name", function () {
    assert.equal(`Hello, Mkhululi`, greet("Mkhululi"));
  });
  it("returns a greeting message, with the persons name", function () {
    assert.equal(`Hello, Palesa`, greet("Palesa"));
  });
  it("returns a greeting message, with the persons name", function () {
    assert.equal(`Hello, Akhona`, greet("Akhona"));
  });
});
