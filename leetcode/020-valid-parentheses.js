var isValid = function(s) {
    const options = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    if(s.length === 0) return true;
    
    const stack = [];
    for(let i = 0; i < s.length; i++)  {
        if(options[s[i]]) {
            stack.push(s[i]); 
        } else {
            const leftBracket = stack.pop();
            const correctBracket = options[leftBracket];
            if(s[i] !== correctBracket) return false
        }
    }
    
  return stack.length === 0;
}

function  isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for (let i = 0; i < s.length; i++) {
	// If character is an opening brace add it to a stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            stack.push(s[i]);
        }  
		//  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
		else {
            let last = stack.pop();
            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
             if (s[i] !== map[last]) {
                return false;
            };
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then false
    if (stack.length !== 0) {
        return false
    };

    return true;
};
