// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


var isValid = function(s) {
    let stack = []
    
    if(s.length <= 1 || s.length % 2 !== 0 || s[0] == ")" || s[0] == "}" || s[0] == "]") {
        return false 
    }

    for(let i = 0; i < s.length; i++) {   
        let lastNum = stack[stack.length - 1] 
        
        if(s[i] == "(" || s[i] == "[" || s[i] == "{") {
                stack.push(s[i])
        }else if (s[i] == ")" && lastNum == "(" || s[i] == "]"  && lastNum == "[" || s[i] == "}" &&                       lastNum == "{" ) {
            stack.pop()
        }else {
            return false 
        }
    }    

 if(stack.length == 0) {
     return true 
 }else {
     return false 
 }

};
