//importing from chai the insertion librery the function
import { expect } from "chai";

//importing the function that we wont to test (befor the func wos created)
import { getLetterCount } from "./letter-count.js";

/*
step one: creating describe func to group simelar test towgethr (describe is from mocha librery)

describe('string to describe the test', (anunemus function) => {
    contain the test
    **can contain adher describes
    it('string wat are we testing',()=>
    {
        insertions (**tests)
        need to backup the functionality in the string
    
    const expected={} what i wont to get
     const actual=getLetterCount("") passing a parameter to  the function that gives my the expected result
     expect(actual).to.deep.equal(expected)  comparing the two
    
    })    **not indevedual tests
});

*/
describe("getLetterCount-Basic Functionality", () => {
  it("returns an empty object wen pass an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("returns the exact letter count for words with only one of each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });
  it("returns the exact letter count for words with more then one of each letter", () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    let actual = getLetterCount("mississippi");
    expect(actual).to.deep.equal(expected);
  });
});
