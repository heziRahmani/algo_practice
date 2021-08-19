import chai, { expect } from "chai"
import {isValidString} from "./ValidParentheses"



describe('checks if a string is valid', () => {
    
it('return false if the function get sumething else then a string', () => {
    
const expected=false;
const actual=isValidString(4);
expect(actual).to.equals(expected);


});

it('returns true if the string is valid', () => {
    const expected=true;
    const actual=isValidString("{bla b(labla []bla) bla}");
expect(actual).to.equals(expected);
});




});
