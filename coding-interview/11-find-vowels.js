// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution #1 - Iterate
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];    //array can also use .includes() or checker="aeiou"

  for (let char of str.toLowerCase()) {   //each character in the string to lower case
    if (checker.includes(char)) { //check if each character is included in the checker
      count++;    //increment the count
    }
  }

  return count;
}

//Solution #2 - Regular Expression
function vowels(str) 
  const matches = str.match(/[aeiou]/gi); //match() - return an array (trusy), or return null (falsy) if no match found
  return matches ? matches.length : 0;
}

module.exports = vowels;
 
