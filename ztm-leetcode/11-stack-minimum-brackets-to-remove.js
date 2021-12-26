Given a string only containing '(' , ')' and lowercase English characters, remove the least amount of brackets so the string is valid
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

step 1: verify the constraints
what do we return from our algorithm? return a valid string with the fewest brackets removed
will there be spaces in the string? no, the string only contains lowercase characters, and ()
is a string containing only lowercase characters valid? yes, you do not need any bracket to have the string to be valid

step 2: write out some test cases
"a)bc(d)" -> "abc(d)"
"(ab(c)d" -> "ab(c)d" or "(abc)d"
"))((" -> ""

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Input: s = "a)b(c)d"
Output: "ab(c)d"

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

step 3: figure out a solution without code
step 4: write out our solution in code
const string1 = "(ab(cd)"

const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];
    
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }
    
    while (stack.length) {
        const curIdx = stack.pop();
        res[curIdx] = '';
    }
    
    return res.join('');
};

console.log(minRemoveToMakeValid(string1))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
