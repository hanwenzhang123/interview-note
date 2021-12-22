Given a string, find the length of the longest substring without repeating characters
"abccabb"   //3

step 1: verify the constraints
- is the substring contiguous? yes, look for a substring not a subsequence
  "abcbbd" - substring //"abc"
  "abcbbd" - subsequence //"abcd"
- does case sensitivity matter? no, assume all characters in the string are lowercase
  
step 2: write out some test cases
"abccabb" => 3
"cccccc" => a
"" => 0
"abcbda" => 4 //cbda

step 3: figure out a solution without code
const string = "abccabb"

// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;    //0 or 1, just return the number
    
    let longest = 0;  //start with 0, will return this value
    
    for(let left = 0; left < s.length; left++) {
      let seenChars = {}, currentLength = 0;  //getting reset => clean previous values to default when for-loop re-run

      for(let right = left; right < s.length; right++) {  //right pointer checks if it already seen before
        const currentChar = s[right]; //the current character where right ponter points to

        if(!seenChars[currentChar]) {   //mean the character does not exist
          currentLength++;    //increment the current length
          seenChars[currentChar] = true;  //store the currentCha to seenChars
          longest = Math.max(longest, currentLength);   //update the longest between current length and the longest length
        } else {    //if it exist in the seenChars
          break;    //break our for loop for right point, move the left pointer
        }
      }
    }
    
    return longest;
};

console.log(lengthOfLongestSubstring(string));

step 4: write out our solution in code
step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity

//Sliding Window Technique - capture a portion of the data
form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it

//Question
Given an array of integers, find two contiguous (has to be side-by-side, can not be apart) integers that form the greatest sum.

step 8: can we optimize our solution?
//Hint
  1st hink: use a sliding window to represent the current substring.
  2nd hink: the size of the window will change based on new characters, and charaters we have already seen before. 
  3rd hint: our seen characters hashmap keeps track of what characters we have seen, and the index we saw them at.
  
const string = "au"

const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const seen = {};
    let left = 0, longest = 0;
    
    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen[currentChar];
        
        if(previouslySeenChar >= left) {
          left = previouslySeenChar + 1;
        }
        
        seen[currentChar] = right;
        
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
};

console.log(lengthOfLongestSubstring(string));
