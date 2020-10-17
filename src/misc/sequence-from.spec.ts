import { sequenceFrom } from "./sequence-from";

describe("sequenceFrom", () => {
  describe("startingWith", () => {
    describe("untilCondition", () => {
      it("should generate an array of items using the rule and seed value up until the terminator condition is met", () => {
        const rule = (n: number) => Math.pow(n, 2);
        const terminator = (n: number) => n > 1e10;
        const seed = 10;

        const result = sequenceFrom(rule)
          .startingWith(seed)
          .untilCondition(terminator);

        expect(result).toEqual([10, 100, 10000, 100000000]);
      });
    });
  });
});
