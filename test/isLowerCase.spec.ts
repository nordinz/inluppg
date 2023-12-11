import { isLowerCase } from "../uppgifter/isLowerCase";

describe("should check if input string is in lower-case", () => {
  it('should return false if input is "HELLO"', () => {
    const res = isLowerCase("HELLO");
    expect(res).toBe(false);
  });
  it('should return true if input is "hello"', () => {
    const res = isLowerCase("hello");
    expect(res).toBe(true);
  });
  it('should return false if input is "eLLOha"', () => {
    const res = isLowerCase("eLLOha");
    expect(res).toBe(false);
  });
});
