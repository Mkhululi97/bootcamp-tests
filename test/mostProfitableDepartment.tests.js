var salesData = [
  { department: "hardware", sales: 4500, day: "Monday" },
  { department: "outdoor", sales: 1500, day: "Monday" },
  { department: "carpentry", sales: 5500, day: "Monday" },

  { department: "hardware", sales: 7005, day: "Friday" },
  { department: "outdoor", sales: 12006, day: "Friday" },
  { department: "carpentry", sales: 16109, day: "Friday" },
];
const salesData2 = [
  { department: "hardware", sales: 7500, day: "Tuesday" },
  { department: "outdoor", sales: 2505, day: "Tuesday" },
  { department: "carpentry", sales: 1540, day: "Tuesday" },
];
const salesData3 = [
  { department: "hardware", sales: 1500, day: "Wednesday" },
  { department: "outdoor", sales: 8507, day: "Wednesday" },
  { department: "carpentry", sales: 8009, day: "Wednesday" },
];
const salesData4 = [
  { department: "hardware", sales: 12000, day: "Thursday" },
  { department: "outdoor", sales: 18007, day: "Thursday" },
  { department: "carpentry", sales: 6109, day: "Thursday" },
];
describe("Test My mostProfitableDepartment Function", function () {
  it("It should return carpentry when is passed salesData", function () {
    assert.equal("carpentry", mostProfitableDepartment(salesData));
  });
  it("It should return hardware when is passed salesData2", function () {
    assert.equal("hardware", mostProfitableDepartment(salesData2));
  });
  it("It should return outdoor when is passed salesData3", function () {
    assert.equal("outdoor", mostProfitableDepartment(salesData3));
  });
  it("It should return outdoor when is passed salesData4", function () {
    assert.equal("outdoor", mostProfitableDepartment(salesData4));
  });
});
