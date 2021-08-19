/*
giving a string check if its valid.
valid if:
*open brackets must be closed by the same type of bracket.
*open brackets must be closed in the correct order
*/

export const isValidString = (_string) => {
    let bracketArrey = ["(", ")", "[", "]", "{", "}"];
    let index;
    
    let stack = [];
    let closingBrackets = 0;

    //checks if the varuble is a string
    if (typeof( _string) === 'string') 
    {
        //loops thru the string
        for (let i = 0; i < _string.length; i++) 
        {
            
        
            for (let j = 0; j < _string.length; j++) 
            {
                
                //checkes for brackets

                if (_string.charAt(j) === bracketArrey[i]) 
                {
                   
                    //checkes if its open or closed brackets
                    if (i%2==0) 
                    {
                   
                        //pusing the open brackets to the stack arrey
                        stack.push(bracketArrey[i]);
                       closingBrackets++
                       console.log(closingBrackets);
                        index = i;
                      
                    }

                    //closing brackets
                    //checkes that its not the first brackets
                    else if (i%2  > 0) 
                    {
                        // checkes if the closing brackets mach the last open
                       
                        if (index + 1 == i) {
                            stack.pop();
                            closingBrackets--
                       console.log(closingBrackets);

                        } else {
                            console.log(false);
                            return false;
                        }
                    }
                }
            }
        }
        
        console.log(stack.length == 0 );

        if (closingBrackets!==0 ) 
        {
            if (stack.length !== 0) {
                console.log("stack length false"+stack.length);
                return false;
            }
           
        }else{
            console.log("stack length true"+stack.length);
            return true;
        }
        
    }else{return false}
};
