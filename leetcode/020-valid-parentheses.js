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
