import { getGenetiv } from "../uppgifter/getGenetiv";

describe('should return the name(input) with an "s" as the last char" ', () => {
  it('should return "Jons" if input is "Jon', () => {
    const res = getGenetiv("Jon");
    expect(res).toBe(`Jons`);
  });
  it('should return "Jonas" if input is "Jonas', () => {
    const res = getGenetiv("Jonas");
    expect(res).toBe(`Jonas`);
  });
  it('should return "Johannas" if input is "Johanna', () => {
    const res = getGenetiv("Johanna");
    expect(res).toBe(`Johannas`);
  });
});
