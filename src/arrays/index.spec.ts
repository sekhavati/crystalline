import * as arrays from "./index";

describe("arrays category index file", () => {
  it("should export all functions", () => {
    expect(arrays).toEqual({
      alter: expect.any(Function),
      check: expect.any(Function),
      findItemsIn: expect.any(Function),
      from: expect.any(Function),
      sort: expect.any(Function),
      split: expect.any(Function),
      tally: expect.any(Function),
    });
  });
});
