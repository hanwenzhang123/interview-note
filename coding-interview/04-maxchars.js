// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Common String Questions
//What is the most common character in the string?
//Does string A have the same characters as string B (is it an anagram)?
//Does the given string have any repeated characters in it?

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {   //loop through all the characters in the string using for of loop
    if (charMap[char]) {  //if we have the property in the charMap
      charMap[char]++;    //increase the number 
    } else {           //if nothing exists in the charMap
      charMap[char] = 1;    //add the property to charMap
    }
  }

  //find the character that is most frequently used
  for (let char in charMap) {  //char will the the key in object, iterate through object using for in loop 
    if (charMap[char] > max) {    //iterate through and compare with current max and update
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;


// input string -> "abcabca"
// output string -> "a"

const string = "abcabca";

const input = (str) => {
    // { "a": 3, "b": 2, "c": 2 }
    const obj = {};

    for (let i=0; i<str.length; i++){
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }

    const maxValue = Math.max(...Object.values(obj));

    const key = Object.keys(obj).find(key => obj[key] === maxValue);
    return key;
};

console.log(input(string));
 
