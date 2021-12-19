// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples 
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//2D Array
// From 0 to n (iterate through rows)
// create an empty string, "stair"
// from 0 to n (iterate through columns)
// if the current column is equal to or less than the current row
// add a "#" to "stair"
// else
// add a space to "stair"
// console.log "stair"

//Solution #1 - Iterative
function steps(n) {
  for (let row = 0; row < n; row++) {   //row
    let stair = '';

    for (let column = 0; column < n; column++) {    //column
      if (column <= row) {  //when colum ad row same
        stair += '#';   //add #
      } else {        //if not the same
        stair += ' ';   //add space
      }
    }

    console.log(stair);   //each console.log to each row
  }
}

//Recursion
function printNumber(n) {
  //identify the base case - when no more work to do, stop the work
  if (n === 0 ){
    return;
  }
  
  //the work we want to do
  console.log(n);
  
  //recursion - avoid infinite loop
  printNumber(n - 1)
}

printNumber(10);

//Recursion Tips
- figure out the bare minimum pieces of information to represent your problem
- give reasonable defaults to the care minimum pieces of info
- check the base case, is there any work left to do? if not, return
- do some work. call your function again, making sure the arguments have changed in some fashion

// if (row === n) then we have hit the end of our problem - base case
// if the stair string has a length === n then we are at the end of a row - stair is ready to print
// if the length of the stair string is less than or equal to the row number we are working on, we add a "#", otherwise add a space

//Solution #2 - Recursive
function steps(n, row = 0, stair = '') {  //row = 0, stair = '' default
  if (n === row) {    //base case
    return;
  }

  if (n === stair.length) { //when hit the end of the stair
    console.log(stair);
    return steps(n, row + 1);
  }
  
  if (stair.length <= row) { //when through the row
    stair += '#';  
  } else {  
    stair += ' ';  
  }
  
  steps(n, row, stair);

  //const add = stair.length <= row ? '#' : ' ';
  //steps(n, row, stair + add);
}

module.exports = steps;
