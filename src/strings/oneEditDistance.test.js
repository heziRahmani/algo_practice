/*
given two strings s and t,determine if they are both one edit apart

possibilities:
insert a character to s
delete a character to s
replace a character from s
*/

import { expect } from "chai";
import {isOneEdit}  from "./oneEditDistance"

describe('checks if the two strings are one edit from each other', () => {
    
    it('returns false if the function get something else then a string', () => {
         const expected=false;
         const actual=isOneEdit(true,4)
         expect(actual).to.equal(expected)

    });




    it('return true if the two strings are one edit apart', () => {
        


const expected=true;
        const actual=isOneEdit("sentence two","sentence tewo")
        expect(actual).to.equal(expected)
    });
 
    
    
    
});
