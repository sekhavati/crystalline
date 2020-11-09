import { merge } from "./merge";

describe("merge", () => {
  describe("deeplyWith", () => {
    describe("resolvingConflictsViaFirstObject", () => {
      it("should create a new object with all properties from the input objects, using values from the first object when the same keys exist in both", () => {
        const obj1 = {
          name: "fred",
          age: 10,
          contact: { email: "moo@example.com" },
        };
        const obj2 = {
          age: 40,
          hair: "blonde",
          contact: { email: "baa@example.com" },
        };

        const result = merge(obj1)
          .deeplyWith(obj2)
          .resolvingConflictsViaFirstObject();

        expect(result).toEqual({
          name: "fred",
          age: 10,
          hair: "blonde",
          contact: { email: "moo@example.com" },
        });
        expect(obj1 !== result).toBe(true);
        expect(obj2 !== result).toBe(true);
      });
    });

    describe("resolvingConflictsViaSecondObject", () => {
      it("should create a new object with all properties from the input objects, using values from the second object when the same keys exist in both", () => {
        const obj1 = {
          name: "fred",
          age: 10,
          contact: { email: "moo@example.com" },
        };
        const obj2 = {
          age: 40,
          hair: "blonde",
          contact: { email: "baa@example.com" },
        };

        const result = merge(obj1)
          .deeplyWith(obj2)
          .resolvingConflictsViaSecondObject();

        expect(result).toEqual({
          name: "fred",
          age: 40,
          hair: "blonde",
          contact: { email: "baa@example.com" },
        });
        expect(obj1 !== result).toBe(true);
        expect(obj2 !== result).toBe(true);
      });
    });

    describe("resolvingConflictsByApplying", () => {
      it("should create a new object with all properties from the input objects, using the resolver function to derive a value for keys that exist in both", () => {
        const obj1 = { a: true, c: { values: [10, 20] } };
        const obj2 = { b: true, c: { values: [15, 35] } };

        const result = merge(obj1)
          .deeplyWith(obj2)
          .resolvingConflictsByApplying((x, y) => [...x, ...y]);

        expect(result).toEqual({
          a: true,
          b: true,
          c: { values: [10, 20, 15, 35] },
        });
        expect(obj1 !== result).toBe(true);
        expect(obj2 !== result).toBe(true);
      });
    });
  });
});
