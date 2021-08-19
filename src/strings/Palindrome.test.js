/*
Given a string, return true if the string is a palindrome or false if it is not.
palindrome = a word that can be read from bout sides

//step 1:revers the word
step 2:comper the word to the revers word
*/
import { expect } from "chai";
import {isPalidrom} from "./Palindrome"



describe('checkes if a word is palindrome', () => {
    
it('return false if the function doent get a string', () => {
    

    const expected=false;
    const actual=isPalidrom(4)
    expect(actual).to.equals(expected)
});

it('return false if the function gets more then one word', () => {
    

    const expected=false;
    const actual=isPalidrom("get false")
    expect(actual).to.equals(expected)
});


});
