/**
 * @jest-environment jsdom
 */

import MakeHeading from "../uppgifter/createHeading";

describe("should create a headder of level === number input", () => {
  it('should return "<h1>Hello</h1>"', () => {
    const create = MakeHeading("hello", 1);
    expect(create).toEqual("<h1>hello</h1>");
  });

  it('should return "<h2>Next Level</h2>"', () => {
    const create = MakeHeading("Next Level", 2);
    expect(create).toEqual("<h2>Next Level</h2>");
  });

  it("should return error msg", () => {
    const create = MakeHeading("hello", 8);
    expect(create).toEqual("Headers can only be between 1 and 6");
  });
});
