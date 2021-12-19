// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//.slice(start, end)

//Solution #1
function capitalize(str) {
  const words = [];   //store our end result

  for (let word of str.split(' ')) {  //loop through the string that is split by spaces
    words.push(word[0].toUpperCase() + word.slice(1));  //capitalize the first character and join the rest of the word by slice(1)
  }

  return words.join(' '); //return the words in string
}

// Create result which is the first character of the input string capitalized
// for each character in the string
// if the character to the left a space
// capitalize it and add it to result
// else
// add it to result

//Solution #2
function capitalize(str) {
  let result = str[0].toUpperCase();    //always capitalize the first character

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {   //if the left is a space
      result += str[i].toUpperCase(); //capitalize the character right to the space
    } else {
      result += str[i];   //otherwise just put the rest of the characters in
    }
  }

  return result;    //return the result
}

module.exports = capitalize;


//string "hello world" to "Hello World"
//no space "hi" to "Hi"
name.charAt(0).toUpperCase() + name.slice(1)

//with space using function
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {		// Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 		// Directly return the joined string
}
