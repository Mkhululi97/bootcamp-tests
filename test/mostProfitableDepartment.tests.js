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
  it("Should return most profitable department when passed a sales data", function () {
    assert.equal("carpentry", mostProfitableDepartment(salesData));
  });
  it("Should return most profitable department when passed a sales data", function () {
    assert.equal("hardware", mostProfitableDepartment(salesData2));
  });
  it("Should return most profitable department when passed a sales data", function () {
    assert.equal("outdoor", mostProfitableDepartment(salesData3));
  });
  it("Should return most profitable department when passed a sales data", function () {
    assert.equal("outdoor", mostProfitableDepartment(salesData4));
  });
});
