import { expect } from "chai";
import {babelSort} from "./babelSort"


describe('cheks functionality of babel sort', () => {
    it('return true if the arrey is shorted', () => {
        
        const expected=[1,1,3,3,4,5,5,6,8,8,9];
        const actual=babelSort([5,8,3,9,5,1,4,8,6,3,1]);
        expect(actual).to.equal(expected)
    });
    
});
