//Solution 1
const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    let longest = 0;
    
    for(let left = 0; left < s.length; left++) {
      let seenChars = {}, currentLength = 0; 

      for(let right = left; right < s.length; right++) { 
        const currentChar = s[right];

        if(!seenChars[currentChar]) { 
          currentLength++; 
          seenChars[currentChar] = true; 
          longest = Math.max(longest, currentLength); 
        } else { 
          break; 
        }
      }
    }
    
    return longest;
};

//Solution 2
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length;
    let longest = 0;
    let substring = "";
    
    for(let character of s) {
        let index = substring.indexOf(character);
        if (index == -1) {
            substring+=character
            longest = Math.max(longest, substring.length)
        } else {
            substring = substring.substring(index+1)+character
//             let tempArr = substring.split("")
//             tempArr.splice(0, index+1)
//             substring = tempArr.join("")
//             substring+=character
        }

    }

    return longest;
    
};

//Solution #3
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length;
    let set = new Set();
    let longest = 0;
    let left = 0;
    let right = 0;
    
    while(right < s.length){
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            longest = Math.max(longest, set.size);
            right++;
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }

    return longest;
    
};
