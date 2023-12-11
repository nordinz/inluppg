import { response9b } from "../respons/dataRes";
import { getGroups } from "../uppgifter/getGroups";

describe("getData tests", () => {
  it("should return array with 3 groups , 2keys for each and their values", async () => {
    const actualResult = await getGroups();
    const expectedResult = response9b;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
