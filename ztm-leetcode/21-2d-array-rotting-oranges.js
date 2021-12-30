You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. 


step 1: verify the constraints
If orange is fresh,  impossible to get rotten (not adjacent to a rotten orange), return -1.
If no oranges, return 0.

step 2: write out some test cases
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1

Input: grid = [[0,2]]
Output: 0

step 3: figure out a solution without code
sequential order 
- get all initial rotten oranges
- keep track counting total number of fresh oranges

step 4: write out our solution in code
const testMatrix = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;


const orangesRotting = function(matrix) {
  if(matrix.length === 0) return 0;

  const queue = [];  
  let freshOranges = 0;
  
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === ROTTEN) {
        queue.push([row, col])
      }
      
      if(matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }
    
  let minutes = 0;
  let currentQueueSize = queue.length;
  
  while(queue.length > 0) {
    if(currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];
    
    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];
      
      if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
        continue;
      }

      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  
  if(freshOranges !== 0) {
    return -1;
  }
  
  return minutes;
};

console.log(orangesRotting(testMatrix))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
