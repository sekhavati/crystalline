import { copy } from "./copy";

describe("copy", () => {
  describe("deeply", () => {
    it("should create a deep copy of the object including any nested objects", () => {
      const input = {
        a: [1, 2, 3],
        b: "foo",
        c: {
          c1: 123,
        },
      };

      const result = copy(input).deeply();

      expect(input).toEqual(result);

      // Referential checks
      expect(input !== result).toBe(true);
      expect(input.a !== result.a).toBe(true);
      expect(input.c !== result.c).toBe(true);
    });
  });

  describe("discardKeys", () => {
    it("should return a partial copy of the object omitting the keys specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).discardKeys("a", "d");

      expect(result).toEqual({ b: 2, c: 3 });
      expect(input !== result).toBe(true);
    });
  });

  describe("keepKeys", () => {
    it("should return a partial copy of an object containing only the keys specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).keepKeys("a", "c");

      expect(result).toEqual({ a: 1, c: 3 });
      expect(input !== result).toBe(true);
    });
  });
});
