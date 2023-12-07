import { validateEmail } from "../uppgifter/emailValidation";

describe("does function exist?", () => {
  it("should return true if it exists", () => {
    expect(validateEmail).toBeDefined();
  });
});

describe("is email valid?", () => {
  it('should return false, missing "@"', () => {
    const isValid = validateEmail("johngmail.com");
    expect(isValid).toBe(false);
  });
});

describe("is email valid?", () => {
  it("should return false, email not correct", () => {
    const isValid = validateEmail("john@gmail");
    expect(isValid).toBe(false);
  });
});

describe("is email valid?", () => {
  it("should return true", () => {
    const isValid = validateEmail("john@gmail.com");
    expect(isValid).toBe(true);
  });
});
