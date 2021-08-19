/*
Given a string, return true if the string is a palindrome or false if it is not.
palindrome = a word that can be read from bout sides

//step 1:revers the word
step 2:comper the word to the revers word
*/

export const isPalidrom=(palindrom)=>
{

    
    if (palindrom && typeof(palindrom)==='string'  && palindrom.match(/\s/g)==null) {
       
            
          return palindrom.split('').reverse().join().replace(/,/g,"");

    }
    else
    {
        return false
    }
 
}