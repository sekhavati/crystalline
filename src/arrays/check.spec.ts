import { check } from "./check";

// R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
// R.endsWith(['b'], ['a', 'b', 'c'])    //=> false

describe("check", () => {
  describe("endsWith", () => {
    it("should return true if the array ends with the items provided", () => {
      const input = ["a", "b", "c"];

      expect(check(input).endsWith("c")).toBe(true);
      expect(check(input).endsWith("b", "c")).toBe(true);
      expect(check(input).endsWith(...["b", "c"])).toBe(true);
    });

    it("should return false if the array does not end with the items provided", () => {
      const input = ["a", "b", "c"];

      expect(check(input).endsWith("b")).toBe(false);
      expect(check(input).endsWith("c", "b")).toBe(false);
      expect(check(input).endsWith(...["c", "b"])).toBe(false);
    });
  });
});
