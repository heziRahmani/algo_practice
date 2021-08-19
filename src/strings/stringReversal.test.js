/*
Given a string of characters return a new string with the reversed order of characters.
reverse('hello') === 'olleh'
reverse('world') === 'dlrow'
*/
import { expect } from "chai";

import { stringReversal } from "./stringReversal";



describe('checkes for srting reversal functionality', () => {
    it('returns true if the function dident get a string', () => {
        const expectsd = false;
        const actual=stringReversal(2)
        expect(actual).to.equals(expectsd)
    });
    
it('returns a string that is the reversal of the given string', () => {
    
    const expectsd="olleh"
    const actual=stringReversal('hello');
    expect(actual).to.deep.equal(expectsd)
});




});


