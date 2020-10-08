const { findItemsIn } = require("./find-items-in");

describe("findItemsIn", () => {
  describe("notContainedIn", () => {
    it("should return a new array containing items from the first array that are not present in the second", () => {
      const input1a = [1, 2, 3, 4];
      const input1b = [7, 6, 5, 4, 3];
      const result1 = findItemsIn(input1a).notContainedIn(input1b);
      expect(result1).toEqual([1, 2]);
      expect(input1a).not.toEqual(result1);
      expect(input1b).not.toEqual(result1);

      const input2a = [7, 6, 5, 4, 3];
      const input2b = [1, 2, 3, 4];
      const result2 = findItemsIn(input2a).notContainedIn(input2b);
      expect(result2).toEqual([7, 6, 5]);
      expect(input2a).not.toEqual(result2);
      expect(input2b).not.toEqual(result2);

      const input3a = [{ a: 1 }, { b: 2 }, { d: 4, e: 5 }];
      const input3b = [{ a: 1 }, { c: 3 }, { d: 4 }];
      const result3 = findItemsIn(input3a).notContainedIn(input3b);
      expect(result3).toEqual([{ b: 2 }, { d: 4, e: 5 }]);
      expect(input3a).not.toEqual(result3);
      expect(input3b).not.toEqual(result3);
    });
  });

  describe("containedIn", () => {
    it("should return a new array containing items from the first array that are present in the second", () => {
      const input1 = [1, 2, 3, 4];
      const input2 = [7, 6, 5, 4, 3];

      const result = findItemsIn(input1).containedIn(input2);

      expect(result).toEqual([3, 4]);
      expect(input1).not.toEqual(result);
      expect(input2).not.toEqual(result);
    });
  });

  describe("and", () => {
    describe("thatAreUnique", () => {
      it("should return a new array containing items that only appear in one of the two arrays", () => {
        const input1a = [1, 2, 3, 4];
        const input1b = [7, 6, 5, 4, 3];

        const result1 = findItemsIn(input1a).and(input1b).thatAreUnique();

        expect(result1).toEqual([1, 2, 7, 6, 5]);
        expect(input1a).not.toEqual(result1);
        expect(input1b).not.toEqual(result1);

        const input2a = [7, 6, 5, 4, 3];
        const input2b = [1, 2, 3, 4];

        const result2 = findItemsIn(input2a).and(input2b).thatAreUnique();

        expect(result2).toEqual([7, 6, 5, 1, 2]);
        expect(input1a).not.toEqual(result2);
        expect(input1b).not.toEqual(result2);
      });
    });
  });
});
