// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// two-dimensional array
// Create empty array of arrays called "results"
// Create a counter variable, starting at 1
// As long as (start column <= end column) AND (start column <= end column)
// Loop from start column to end column
// at result[start_row][i] assign counter variables
// increment counter
// increment start row
// loop from start row to end row
// at result[i][end_column] assign counter variable
// increment counter
// decrement end row
// ...repeat for other two sides

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);   //if n is 2, then results now is [[], []]
  }

  //will change values overtime
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;  
  
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {  //decreasing down to the startColumn
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
