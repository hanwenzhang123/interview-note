// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// from 0 to n (iterate through rows)
// create an empty string, "level"
// from 0 to ??? (columns)
// if the column should have a #
// add a "#" to "level"
// else
// add a space to level
// console.log "stair"

//Solution #1
function pyramid(n) {   //n is the total row, but we do not know the column yet
  const midpoint = Math.floor((2 * n - 1) / 2);   //calculate the central point

  for (let row = 0; row < n; row++){    //row
    let level = '';     //level of the character

    for (let column = 0; column < 2 * n - 1; column++) {   // column number - 2 * n - 1 
      if (midpoint - row <= column && midpoint + row >= column) { //watch for left and right of the midpoint
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

//Solution #2
function pyramid(n, row = 0, level = '') {
  if (row === n) {    //base case, we return, stop calling pyramid
    return;
  }

  if (level.length === 2 * n - 1) {  
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
