const { clamp } = require("./clamp");

describe("clamp", () => {
  describe("between", () => {
    describe("and", () => {
      it("should restrict a number to be within the range specified", () => {
        expect(clamp(-5).between(1).and(10)).toBe(1);
        expect(clamp(15).between(1).and(10)).toBe(10);
        expect(clamp(4).between(1).and(10)).toBe(4);
      });
    });
  });
});