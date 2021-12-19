// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n  //assign to a variable
    .toString()   //turn the number to string
    .split('')  //turn in to array
    .reverse()  //reverse
    .join('');  //join array back to string
  
//   if (n < 0){  //we can use Math.sign instead of another if statement
//     return parseInt(reversed) * -1;  
//   }

  return parseInt(reversed) * Math.sign(n);  
  //parseInt takes the string and return back to number
  //Math.sign - if negative will return negative with the negative sign, maintain the sign
}

module.exports = reverseInt;
