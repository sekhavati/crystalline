import { alter } from "./alter";

describe("alter", () => {
  describe("byApplying", () => {
    describe("atIndex", () => {
      it("should return a new array with the function supplied at the given index", () => {
        const input = ["a", "b", "c", "d"];

        const result = alter(input)
          .byApplying((n) => n.toUpperCase())
          .atIndex(1);

        expect(result).toEqual(["a", "B", "c", "d"]);
        expect(input).not.toEqual(result);
      });
    });
  });

  describe("byInsertingBetweenEachItem", () => {
    it("should return a new array with the value supplied inserted between each item", () => {
      const input = ["b", "n", "n", "s"];

      const result = alter(input).byInsertingBetweenEachItem("a");

      expect(result).toEqual(["b", "a", "n", "a", "n", "a", "s"]);
      expect(input).not.toEqual(result);
    });
  });

  describe("byMovingItemAtIndex", () => {
    describe("toIndex", () => {
      it("should return a new array with the item at the index specified moved to the chosen index", () => {
        const input = ["a", "b", "c", "d", "e", "f"];

        const result = alter(input).byMovingItemAtIndex(0).toIndex(2);

        expect(result).toEqual(["b", "c", "a", "d", "e", "f"]);
        expect(input).not.toEqual(result);
      });
    });

    describe("toTheStart", () => {
      it("should return a new array with the item at the index specified moved to the start of the array", () => {
        const input = ["a", "b", "c", "d", "e", "f"];

        const result = alter(input).byMovingItemAtIndex(2).toTheStart();

        expect(result).toEqual(["c", "a", "b", "d", "e", "f"]);
        expect(input).not.toEqual(result);
      });
    });

    describe("toTheEnd", () => {
      it("should return a new array with the item at the index specified moved to the end of the array", () => {
        const input = ["a", "b", "c", "d", "e", "f"];

        const result = alter(input).byMovingItemAtIndex(2).toTheEnd();

        expect(result).toEqual(["a", "b", "d", "e", "f", "c"]);
        expect(input).not.toEqual(result);
      });
    });
  });

  describe("byRemovingItemsBetweenIndex", () => {
    describe("andIndex", () => {
      it("should return a new array with all items between the two indexes removed ", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8];

        const result = alter(input).byRemovingItemsBetweenIndex(2).andIndex(3);

        expect(result).toEqual([1, 2, 6, 7, 8]);
        expect(input).not.toEqual(result);
      });
    });

    describe("andTheEnd", () => {
      it("should return a new array with all items between the index specified and the end removed", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8];

        const result = alter(input).byRemovingItemsBetweenIndex(3).andTheEnd();

        expect(result).toEqual([1, 2, 3]);
        expect(input).not.toEqual(result);
      });
    });
  });

  describe("byRemovingDuplicates", () => {
    it("should return a new array with any duplicates from the original removed", () => {
      const input1 = [1, 1, 2, 1];
      const input2 = [1, "1"];
      const input3 = [[42], [42]];

      const result1 = alter(input1).byRemovingDuplicates();
      const result2 = alter(input2).byRemovingDuplicates();
      const result3 = alter(input3).byRemovingDuplicates();

      expect(result1).toEqual([1, 2]);
      expect(input1).not.toEqual(result1);

      expect(result2).toEqual([1, "1"]);

      expect(result3).toEqual([[42]]);
      expect(input3).not.toEqual(result3);
    });
  });

  describe("byRemovingItemsEqualTo", () => {
    it("should return a new array with any items matching those supplied removed", () => {
      const input = [1, 2, 1, 3, 4];

      const result = alter(input).byRemovingItemsEqualTo(1, 2);

      expect(input).not.toEqual(result);
      expect(result).toEqual([3, 4]);
    });
  });

  describe("byRemovingFalsyItems", () => {
    it("should return a new array with all falsy items removed", () => {
      const input = [
        "a",
        false,
        "b",
        null,
        "c",
        undefined,
        "d",
        0,
        "e",
        -0,
        "f",
        NaN,
        "g",
        "",
      ];

      const result = alter(input).byRemovingFalsyItems();

      expect(input).not.toEqual(result);
      expect(result).toEqual(["a", "b", "c", "d", "e", "f", "g"]);
    });
  });
});
