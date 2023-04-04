let itemList = [
  { name: "apples", qty: 10 },
  { name: "pears", qty: 37 },
  { name: "bananas", qty: 27 },
  { name: "apples", qty: 3 },
];
let itemsOver20 = [
  { name: "pears", qty: 37 },
  { name: "bananas", qty: 27 },
];
describe("Test My findItemsOver20 Function", function () {
  it("It should return all the dataset where items are over 20", function () {
    assert.deepEqual(itemsOver20, findItemsOver20(itemList));
  });
});
