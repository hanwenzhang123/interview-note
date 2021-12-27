2D Arrays - Matrices
- tend to be the same size
- row (outer array), column (internal value)

//Basic and Traversal Algorithms
//Matrix traversal - DFS
//Time: O(n)
//Space: O(n)
const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalDFS = function(matrix) {   //receive the matrix
  const seen =    //hold the information and the array frame
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false)); 
     //generate array filled with 0, then fill every 0 with another array with the element numbers in its length filled with false

  const values = [];  //will be the result

  dfs(matrix, 0, 0, seen, values);    //dfs function

  return values;
}

const dfs = function(matrix, row, col, seen, values) {
  if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return; //edge cases
  
  seen[row][col] = true;  //update the data structure to true
  values.push(matrix[row][col]);  //push to the values

  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);    //recursive, row and col will be passed based on the direction array of arrays
  }
}

console.log(traversalDFS(testMatrix));  //[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]


//Matrix traversal - BFS
//Time: O(n)
//Space: O(n)
const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalBFS = function(matrix) {
  const seen = 
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  const queue = [[0, 0]];   //breath first search always needs queue

  while(queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
      continue;   //skip the iteration
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);
    
    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]); //push the row and column
    }
  }

  return values;
}

console.log(traversalBFS(testMatrix));  //[1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16]
 
