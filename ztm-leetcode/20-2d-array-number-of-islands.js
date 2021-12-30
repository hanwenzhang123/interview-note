Values
- limites
- unlimited
//sequential ordering 
- using z to scan the entire 2d array to do the value check

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

step 1: verify the constraints
are the edges of the 2d array water?
  yes, assume anything outside of the 2d array is water
step 2: write out some test cases
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

step 3: figure out a solution without code
0 - water
1 - new island 
    part of the old island
how do we make sure we do not double count the value
    
traversal
- BFS
- DFS
- space: O(n)

sequential order (top down and left to right)
- you want to touch every single element
- you do not care about the order
- you do not take additional space
- time: O(n)
- space: O(1)
- nested for loop inside another loop not increase another space

step 4: write out our solution in code
//Number of Islands - BFS - better
//sequential search using 2 for-loops 
- Time: O(m*n) //size m*n, row*column
- Space: O(max(m, n))
const testMatrix = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1]
];

const directions = [    //4 directions
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const numberOfIslands = function(matrix) {
  if(matrix.length === 0) return 0;   //when matrix is empty, no islands
  let islandCount = 0;    //count the island initially 0

  for(let row = 0; row < matrix.length; row++) {  //sequential search using 2 for-loops to keep track how to many island
    for(let col = 0; col < matrix[0].length; col++) {   //same size so just use the first row
      if(matrix[row][col] === 1) {    //BFS, only check when see the island 1
        islandCount++;      //found island and count++
        matrix[row][col] = 0;   //reverse the value 1 to 0, keep fliping 1 to 0
        const queue = [];   //BFS, since js does not have a queue native implementation
        queue.push([row, col]); //push the current cell, row and column 

        while(queue.length) {   //while loop to check the direction, 
          const currentPos = queue.shift();   //the first value in the queue
          const currentRow = currentPos[0];   //the row of the first value of the array pair in queue
          const currentCol = currentPos[1];   //the column of the first value of the array pair in queue

          for(let i = 0; i < directions.length; i++) {    //check the 4 directions, 0 or 1
            const currentDir = directions[i];   //get each direction  
            const nextRow = currentRow + currentDir[0];   //get the direction row
            const nextCol = currentCol + currentDir[1];   //get the direction column

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue; //when condition met, just continue, break out current iteration

            if(matrix[nextRow][nextCol] === 1) {    //if discover the island 1
              queue.push([nextRow, nextCol]);   //push the value pair(row, column) into the queue
              matrix[nextRow][nextCol] = 0;   //flip the 1 to 0
            }
          }
        }
      }
    }
  }

  return islandCount;   //return the islandCount
}

console.log(numberOfIslands(testMatrix));

//Number of Islands - DFS
- Time: O(m*n) 
- Space: O(m*n)
const testMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1]
];

const directions = [    //4 directions
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = function(grid, currentRow, currentCol) {
  if(currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) return;

  if(grid[currentRow][currentCol] === 1) {
    grid[currentRow][currentCol] = 0;

    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const row = currentDir[0];
      const col = currentDir[1];
      dfs(grid, currentRow + row, currentCol + col);
    }
  }
}

const numberOfIslands = function(grid) {
  if(!grid.length) return 0;
  
  let islandCount = 0;
  
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === 1) {
        islandCount++;
        dfs(grid, row, col);
      }
    }
  }
  
  return islandCount;
};



console.log(numberOfIslands(testMatrix));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
  
