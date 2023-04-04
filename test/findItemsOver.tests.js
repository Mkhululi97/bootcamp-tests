var itemList1 = [
  { name: "apples", qty: 10 },
  { name: "pears", qty: 37 },
  { name: "bananas", qty: 27 },
  { name: "apples", qty: 47 },
];

var itemsOver30 = [
  { name: "pears", qty: 37 },
  { name: "apples", qty: 47 },
];

var itemList2 = [
  { name: "apples", qty: 10 },
  { name: "pears", qty: 19 },
  { name: "bananas", qty: 17 },
  { name: "apples", qty: 3 },
];

var itemsOver35 = [];

var itemList3 = [
  { name: "apples", qty: 140 },
  { name: "pears", qty: 95 },
  { name: "bananas", qty: 203 },
  { name: "apples", qty: 37 },
];

var itemsOver90 = [
  { name: "apples", qty: 140 },
  { name: "pears", qty: 95 },
  { name: "bananas", qty: 203 },
];
describe("Test My findItemsOver Function", function () {
  it("It should return all the dataset where items are over 30, when passed '30'", function () {
    assert.deepEqual(itemsOver30, findItemsOver(itemList1, 30));
  });
  it("It should return all the dataset where items are over 35, when passed '35'", function () {
    assert.deepEqual(itemsOver35, findItemsOver(itemList2, 35));
  });
  it("It should return all the dataset where items are over 90, when passed '90'", function () {
    assert.deepEqual(itemsOver90, findItemsOver(itemList3, 90));
  });
});
