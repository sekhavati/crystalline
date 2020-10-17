import { sort } from "./sort";

describe("sort", () => {
  describe("ascendinglyBy", () => {
    it("should return a new array with items from the source array sorted in ascending order by a given property", () => {
      const input = [
        { name: "Emma", age: 70 },
        { name: "Peter", age: 78 },
        { name: "Mikhail", age: 62 },
      ];

      const result = sort(input).ascendinglyBy("age");

      expect(result).toEqual([
        { name: "Mikhail", age: 62 },
        { name: "Emma", age: 70 },
        { name: "Peter", age: 78 },
      ]);
      expect(input !== result).toBe(true);
    });
  });

  describe("descendinglyBy", () => {
    it("should return a new array with items from the source array sorted in descending order by a given property", () => {
      const input = [
        { name: "Emma", age: 70 },
        { name: "Peter", age: 78 },
        { name: "Mikhail", age: 62 },
      ];

      const result = sort(input).descendinglyBy("age");

      expect(result).toEqual([
        { name: "Peter", age: 78 },
        { name: "Emma", age: 70 },
        { name: "Mikhail", age: 62 },
      ]);
      expect(input !== result).toBe(true);
    });
  });

  describe("firstAscendinglyBy", () => {
    describe("thenAscendinglyBy", () => {
      it("should return a new array with items from the source array sorted in ascending order by the first property, then ascending by the second property", () => {
        const alice = {
          name: "alice",
          age: 40,
        };
        const bob = {
          name: "bob",
          age: 30,
        };
        const clara = {
          name: "clara",
          age: 40,
        };
        const input = [clara, bob, alice];

        const result = sort(input)
          .firstAscendinglyBy("age")
          .thenAscendinglyBy("name");

        expect(result).toEqual([bob, alice, clara]);
        expect(input !== result).toBe(true);
      });
    });

    describe("thenDescendinglyBy", () => {
      it("should return a new array with items from the source array sorted in ascending order by the first property, then descending by the second property", () => {
        const alice = {
          name: "alice",
          age: 40,
        };
        const bob = {
          name: "bob",
          age: 30,
        };
        const clara = {
          name: "clara",
          age: 40,
        };
        const input = [clara, bob, alice];

        const result = sort(input)
          .firstAscendinglyBy("age")
          .thenDescendinglyBy("name");

        expect(result).toEqual([bob, clara, alice]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("firstDescendinglyBy", () => {
    describe("thenAscendinglyBy", () => {
      it("should return a new array with items from the source array sorted in descending order by the first property, then ascending by the second property", () => {
        const alice = {
          name: "alice",
          age: 40,
        };
        const bob = {
          name: "bob",
          age: 30,
        };
        const clara = {
          name: "clara",
          age: 40,
        };
        const input = [clara, bob, alice];

        const result = sort(input)
          .firstDescendinglyBy("age")
          .thenAscendinglyBy("name");

        expect(result).toEqual([alice, clara, bob]);
        expect(input !== result).toBe(true);
      });
    });

    describe("thenDescendinglyBy", () => {
      it("should return a new array with items from the source array sorted in descending order by the first property, then descending by the second property", () => {
        const alice = {
          name: "alice",
          age: 40,
        };
        const bob = {
          name: "bob",
          age: 30,
        };
        const clara = {
          name: "clara",
          age: 40,
        };
        const input = [clara, bob, alice];

        const result = sort(input)
          .firstDescendinglyBy("age")
          .thenDescendinglyBy("name");

        expect(result).toEqual([clara, alice, bob]);
        expect(input !== result).toBe(true);
      });
    });
  });
});
