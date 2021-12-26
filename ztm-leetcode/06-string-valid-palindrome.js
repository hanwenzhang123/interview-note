A subproblem is a problem we have to solve along the way to solving the main problem
e.g. Given a string, find the length of the longest substring without repeating characters
main problem: find the length of the longest substring 
sub problem: pattern matching - unique substring

step 1: verify the constraints
step 2: write out some test cases

A palindrome is a string that reads the same forwards and backwards
Given a string s, return true if it is a palindrome, or false otherwise.
considering only alphanumeric characters and ignoring case sensitivity
//"aba" "a" "racecar" " " => true

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "abc"
Output: false
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.

step 3: figure out a solution without code
step 4: write out our solution in code

//Valid Palindrome - compare against reverse
const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //transform the string format
    let rev = "";   //will get a reversed string
    
    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }

    return rev === s; //compare the string and its reversed version
};

console.log(isValidPalindrome(string));

//Valid Palindrome - 2 pointers from outside
const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //transform the string format
    
    // initialize left/right pointers at start and end of string respectively
    let left = 0; right = s.length - 1;
    
    // loop through string characters while comparing them, then move the pointers closer to the center
    while(left < right) {
        if(s[left] !== s[right]) {
            return false  //return false if left and right not the same
        }
        //while loop continus if left and right characters are the same
        left++;
        right--;
    }
    
    return true;
};

console.log(isValidPalindrome(string));

//Valid Palindrome - 2 pointers from center
const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //transform the string format
    
    // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;
    
    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }
    
    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }
        
        left--;
        right++;
    }
    
    return true;
};

console.log(isValidPalindrome(string));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
  
//Almost A Palindrome
"raceacar" => "racecar" or "racacar" => true
"abccdba" => "abccba" => true
"abcdefdba" => false
"" => true
"a" => true
"ab" => true

//Time: O(n)
//Space: O(1)

const validSubPalindrom = function(s, left, right){   //function will return boolean
  while(left < right){
    if(s[left] !== s[right]){ //if two characters are not the same
      return false
    }
    //if condition valid, we move the pointer
    left++;
    right--;
  }
  return true;
}

const isAlmostPalindrom = function(s){
  let left = 0; right = s.length - 1;   //initialize values
  while(left < right){  //when left is less than right
    if(s[left] !== s[right]){   //if two characters are not the same
      return validSubPalindrom(s, left+1, right) || validSubPalindrom(s, left, right-1) //pass to the function with either left+1 or right-1
    }
  }
}


//Almost Palindrom
var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
      if (s[start] !== s[end]) {
          return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
      }
      start++;
      end--;
  }
  return true;
};

var validSubPalindrome = function(s, start, end) {
  while (start < end) {
      if (s[start] !== s[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
};
  
  
