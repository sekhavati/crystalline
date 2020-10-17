import { sequence } from "./sequence";

describe("sequence", () => {
  describe("startingWith", () => {
    describe("untilCondition", () => {
      it("should generate an array of items using the rule and seed value up until the terminator condition is met", () => {
        const rule = (n) => Math.pow(n, 2);
        const terminator = (n) => n > 1e10;
        const seed = 10;

        const result = sequence(rule)
          .startingWith(seed)
          .untilCondition(terminator);

        expect(result).toEqual([10, 100, 10000, 100000000]);
      });
    });
  });
});
