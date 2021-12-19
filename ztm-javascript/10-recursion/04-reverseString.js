//Implement a function that reverses a string using iteration...and then recursion!

//Iterative
function reverseString(str) {
  let arrayStr = str.split("");   //split string to array
  let reversedArray = [];
  
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    
    if(array.length > 0) {
      reversedArray.push(array.pop());    //push the last one to the reversedArray while array pop off the last one
      addToArray(array);    //keep calling the function with current array while array.length > 0
    }
    return;
  }
  addToArray(arrayStr);
  
  return reversedArray.join("");  //join array to string
}

reverseString('yoyo master');

//Recursive
function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');


//String.substr()
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
