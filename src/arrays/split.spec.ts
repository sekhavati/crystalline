import { split } from "./split";

describe("split", () => {
  describe("atIndex", () => {
    it("should return a new array that contains two arrays after splitting the original at the index specified", () => {
      const input = [1, 2, 3];

      const result = split(input).atIndex(1);

      expect(result).toEqual([[1], [2, 3]]);
      expect(input !== result).toBe(true);
    });
  });

  describe("atFirstEncounterOf", () => {
    it("should return a new array that contains two arrays after splitting the original at the first point where the predicate holds true", () => {
      const input = [1, 2, 3, 1, 2, 3];

      const result = split(input).atFirstEncounterOf((n) => n === 2);

      expect(result).toEqual([[1], [2, 3, 1, 2, 3]]);
      expect(input !== result).toBe(true);
    });
  });

  describe("everyNthIndex", () => {
    it("should return a new array that contains multiple other arrays that are the result of splitting the original every N items", () => {
      const input = [1, 2, 3, 4, 5, 6, 7];

      const result = split(input).everyNthIndex(3);

      expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
      expect(input !== result).toBe(true);
    });
  });

  describe("byItemsMatching", () => {
    it("should return a new array that contains two arrays after separating the contents of the original into items that satisfy the predicate and those that dont", () => {
      const input = ["sss", "ttt", "foo", "bars"];

      const result = split(input).byItemsMatching((n) => n.includes("s"));

      expect(result).toEqual([
        ["sss", "bars"],
        ["ttt", "foo"],
      ]);
      expect(input !== result).toBe(true);
    });
  });
});
