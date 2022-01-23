//Solution #1
var backspaceCompare = function(s, t) {
    const str = (str) => {
        const stack = [];
        for(let c of str) {
            if(c === "#"){
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return stack.join("")
    }
    
    return str(s) === str(t);
};

