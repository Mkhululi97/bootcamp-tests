describe("Test My countAllFromTown Function", function () {
  it("It should return 5 when passed 'CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120', 'CJ'", function () {
    assert.equal(
      5,
      countAllFromTown(
        "CJ 012, CJ 456, CJ 506, 050 CJ, CJ 008, 334 CA, CJ 120",
        "CJ"
      )
    );
  });
  it("It should return 2 when passed 'CF 201, CJ 456, 116 CF, 774 CJ, CF 978, 021 CF', 'CF'", function () {
    assert.equal(
      2,
      countAllFromTown("CF 201, CJ 456, 116 CF, 774 CJ, CF 978, 021 CF", "CF")
    );
  });
  it("It should return 0 when passed 'YTM 456 GP, YLS 402 GP, JNF 556 GP', 'GP'", function () {
    assert.equal(
      0,
      countAllFromTown("YTM 456 GP, YLS 402 GP, JNF 556 GP", "GP")
    );
  });
  it("It should return 3 when passed 'ND 456-894, JN 78 YU GP, ND 110-402', ND 773-098, 'ND'", function () {
    assert.equal(
      3,
      countAllFromTown("ND 456-894, JN 78 YU GP, ND 110-402', ND 773-098", "ND")
    );
  });
});
