describe("Test My countAllFromTown Function", function () {
  it("Returns total number of registrations that are from the city/province passed in the second argument", function () {
    assert.equal(
      5,
      countAllFromTown(
        "CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120",
        "CJ"
      )
    );
  });
  it("Returns total number of registrations that are from the city/province passed in the second argument", function () {
    assert.equal(
      2,
      countAllFromTown("CF 201, CJ 456, 116 CF, 774 CJ, CF 978, 021 CF", "CF")
    );
  });
  it("Returns total number of registrations that are from the city/province passed in the second argument", function () {
    assert.equal(
      0,
      countAllFromTown("YTM 456 GP, YLS 402 GP, JNF 556 GP", "GP")
    );
  });
  it("Returns total number of registrations that are from the city/province passed in the second argument", function () {
    assert.equal(
      3,
      countAllFromTown("ND 456-894, JN 78 YU GP, ND 110-402', ND 773-098", "ND")
    );
  });
});
