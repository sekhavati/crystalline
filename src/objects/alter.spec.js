const { alter } = require("./alter");

describe("alter", () => {
  describe("byApplying", () => {
    describe("toKey", () => {
      it("should create a new object that is a copy of the original but with the transformation applied to the key specified", () => {
        const input = {
          firstName: "  Tomato ",
          data: { elapsed: 100, remaining: 1400 },
          id: 123,
        };

        const result = alter(input)
          .byApplying((n) => n.trim())
          .toKey("firstName");

        expect(result).toEqual({
          firstName: "Tomato",
          data: { elapsed: 100, remaining: 1400 },
          id: 123,
        });
      });
    });
  });
});
