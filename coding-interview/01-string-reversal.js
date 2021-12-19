// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution #1
function reverse(str) {
  return str
    .split('')    //convert string to array
    .reverse()    //built in reverse function in array
    .join('');    //convert back to string
}

//Solution #2 - not using reverse function
function reverse(str) {
  let reversed = '';    //save the iterate value

  for (let character of str) {  //for of loop for string or array
    reversed = character + reversed;  //take each charater add on to the reversed
  }

  return reversed;
}

//Solution #3 - using reduce helper
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, ''); //reduce returns a single value based on initial point
}   //callback function with previousValue(reverse), currentValue(character), and a starting point

module.exports = reverse;


