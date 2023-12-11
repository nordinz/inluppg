import { response9a } from "../respons/dataRes";
import { getData } from "../uppgifter/getData";

describe("getData tests", () => {
  it("should return array with 6 persons, 2keys for each and their values", async () => {
    const actualResult = await getData();
    const expectedResult = response9a;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
