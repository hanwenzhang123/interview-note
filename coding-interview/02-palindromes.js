// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution #1
function palindrome(str) {
  const reversed = str    //get the reversed format
    .split('')    //turn string into array
    .reverse()
    .join('');

  return str === reversed;  //direct comparison to check if it is palindromes
}

//Solution #2 - not ideal, we do extra checks
function palindrome(str) {
  return str.split('').every((char, i) => { //every() => a boolean check on every element in the array
    return char === str[str.length - i - 1];  //compare first to the last
  });
}

module.exports = palindrome;

