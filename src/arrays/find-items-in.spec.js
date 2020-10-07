const { findItemsIn } = require("./find-items-in");

describe("findItemsIn", () => {
  describe("notContainedIn", () => {
    it("should return a new array containing items from the first array that are not present in the second", () => {
      const input1a = [1, 2, 3, 4];
      const input1b = [7, 6, 5, 4, 3];
      const result1 = findItemsIn(input1a).notContainedIn(input1b);
      expect(result1).toEqual([1, 2]);
      expect(input1a).not.toEqual(result1);

      const input2a = [7, 6, 5, 4, 3];
      const input2b = [1, 2, 3, 4];
      const result2 = findItemsIn(input2a).notContainedIn(input2b);
      expect(result2).toEqual([7, 6, 5]);
      expect(input2a).not.toEqual(result2);

      const input3a = [{ a: 1 }, { b: 2 }];
      const input3b = [{ a: 1 }, { c: 3 }];
      const result3 = findItemsIn(input3a).notContainedIn(input3b);
      expect(result3).toEqual([{ b: 2 }]);
      expect(input3a).not.toEqual(result3);
    });
  });
});
