Primarily revolve around the order in which we retrieve data from either a stack or a queue.
Stack - last in first out
Queue - first in first out

step 1: verify the constraints
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

step 2: write out some test cases
Input: s = "()"
Output: true
Input: s = "()[]{}"
Output: true
Input: s = "(]"
Output: false
Input: s = "{[]()}"
Output: true

step 3: figure out a solution without code
step 4: write out our solution in code
const string = "{()[]}"

const parens = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
  if(s.length === 0) return true; //empty, just return true
  
  const stack = [];   //using array to store the stack (push pop)
  
  for(let i = 0; i < s.length; i++)  {  //iterate through string
    if(parens[s[i]]) {    //left bracket
      stack.push(s[i]);   //push the left bracket
    } else {    //right bracket
      const leftBracket = stack.pop();  //pop it
      const correctBracket = parens[leftBracket]; //get the correct right corresponding bracket
      if(s[i] !== correctBracket) return false    //do the comparison, if not equal, return false
    }
  }
  
  return stack.length === 0;    //return true if no remaining element left in stack
};

console.log(isValid(string));

step 5: double check for errors
step 6: test our code with our test cases

step 7: space & time complexity
space: O(n)
time: O(n)

step 8: can we optimize our solution?
   
