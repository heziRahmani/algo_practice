/*
Given a string of characters return a new string with the reversed order of characters.
reverse('hello') === 'olleh'
reverse('world') === 'dlrow'
*/

export const stringReversal=(_string)=>
{
   
    if(typeof(_string)==='string')
    {
        
   
        return _string.split('').reverse().join().replace(/,/g,"");
    }
    else
    {
        return false
    }
}
