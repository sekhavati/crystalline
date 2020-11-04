import * as objects from "./index";

describe("objects category index file", () => {
  it("should export all functions", () => {
    expect(objects).toEqual({
      alter: expect.any(Function),
      copy: expect.any(Function),
      merge: expect.any(Function),
    });
  });
});
