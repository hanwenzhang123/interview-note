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
    const res = str.split('');  //O(n), return array with every single character
    const stack = [];       //O(n)
    
    for (let i = 0; i < res.length; i++) {  //O(n)
        if (res[i] === '(') {   //when we encounter a left facing bracket
            stack.push(i);  //push the index value to stack
        } else if (res[i] === ')' && stack.length) {    //right facing while stack we have value in it
            stack.pop();    //pop up the last value from stack
        } else if (res[i] === ')') {    //right bracket but stack has no values
            res[i] = '' //changing the value at res[i] to empty
        }
    }
    
    while (stack.length) {  //O(n), while we have something in stack
        const curIdx = stack.pop(); //pop out the value (index number) from stack
        res[curIdx] = '';   //get rid of the invalid bracket that is not closed properly
    }
    
    return res.join('');   //O(n), join the array back as string
};

console.log(minRemoveToMakeValid(string1))

step 5: double check for errors
step 6: test our code with our test cases

step 7: space & time complexity
time: O(n)
space: O(n)

step 8: can we optimize our solution?
