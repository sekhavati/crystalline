import * as misc from "./index";

describe("misc category index file", () => {
  it("should export all functions", () => {
    expect(misc).toEqual({
      sequenceFrom: expect.any(Function),
    });
  });
});
