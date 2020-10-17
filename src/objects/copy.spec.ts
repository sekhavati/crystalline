import { copy } from "./copy";

describe("copy", () => {
  describe("deeply", () => {
    it("should create a deep copy of the object which may contain other nested objects", () => {
      const input = [{}, {}, {}];

      const result = copy(input).deeply();

      expect(input !== result).toBe(true);
      expect(input[0] !== result[0]).toBe(true);
    });
  });

  describe("discardKey", () => {
    it("should return a partial copy of the object omitting the key specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).discardKey("a");

      expect(result).toEqual({ b: 2, c: 3, d: 4 });
      expect(input !== result).toBe(true);
    });
  });

  describe("discardKeys", () => {
    it("should return a partial copy of the object omitting the keys specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).discardKeys(["a", "d"]);

      expect(result).toEqual({ b: 2, c: 3 });
      expect(input !== result).toBe(true);
    });
  });

  describe("keepKey", () => {
    it("should return a partial copy of an object containing only the key specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).keepKey("a");

      expect(result).toEqual({ a: 1 });
      expect(input !== result).toBe(true);
    });

    it("should return a partial copy of an object with 'key: undefined' when a property doesn't exist", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result1 = copy(input).keepKey("e");
      const result2 = copy(input).keepKey("e", true);

      expect(result1).toEqual({});
      expect(result2).toEqual({ e: undefined });
      expect(input !== result1).toBe(true);
      expect(input !== result2).toBe(true);
    });
  });

  describe("keepKeys", () => {
    it("should return a partial copy of an object containing only the keys specified", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result = copy(input).keepKeys(["a", "c"]);

      expect(result).toEqual({ a: 1, c: 3 });
      expect(input !== result).toBe(true);
    });

    it("should return a partial copy of an object with 'key: undefined' for properties that don't exist", () => {
      const input = { a: 1, b: 2, c: 3, d: 4 };

      const result1 = copy(input).keepKeys(["a", "e", "f"]);
      const result2 = copy(input).keepKeys(["a", "e", "f"], true);

      expect(result1).toEqual({ a: 1 });
      expect(result2).toEqual({ a: 1, e: undefined, f: undefined });
      expect(input !== result1).toBe(true);
      expect(input !== result2).toBe(true);
    });
  });
});
