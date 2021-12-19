// --- Directions - same quantity of each character
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const word = "Hi THERE!!!"
word.replace(/[^\w]/g, "").toLowerCase(); //hithere

generate character maps - solve any type of question involving strings and comparison between them 

//Solution #1
function anagrams(stringA, stringB) {
  //build the charater maps first
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {    //look at the keys of each object and compare the length
    return false;
  }

  for (let char in aCharMap) {      //iterate through object using for-in
    if (aCharMap[char] !== bCharMap[char]) {    //compare each key value pair between two objects
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {   //cleanup logic
    charMap[char] = charMap[char] + 1 || 1;   //assign if the charMap[char] not exist using || 1
  }

  return charMap;
}

//Solution #2 - may have performance issue
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);   //comparing the two string
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')  //turn it into array
    .sort()   //sort the string so we can compare if both are same
    .join('');  //join back to string
}

module.exports = anagrams;

