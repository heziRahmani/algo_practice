import { expect } from "chai";
import { checkForEnegram } from "./anegram.js";

describe("checkForEnegram-basic functionality", () => {
  it("returns false when passing two empty strings", () => {
    const expected = false;
    let actual = checkForEnegram("", "");
    expect(actual).to.deep.equal(expected);
  });
  it("returns false if one string has more letters then the other", () => {
    const expectsd = false;
    const actual = checkForEnegram("lisqten", "silent");
    expect(actual).to.deep.equals(expectsd);

    const actual2 = checkForEnegram("silent", "lisqten");
    expect(actual2).to.deep.equals(expectsd);
  });
  it("returns true if the two strings are anagrams", () => {
    const expectsd = true;
    const actual = checkForEnegram("listen", "silent");
    expect(actual).to.deep.equals(expectsd);
  });

});
