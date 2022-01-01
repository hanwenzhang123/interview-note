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

Sequential Order:
- count fresh oranges
- put rotten oranges into queues

BFS
- use queue size to track minutes
- process rotting oranges
  - rotten adjacent to fresh oranges
  - push into queue
  - decrement fresh orange count

step 4: write out our solution in code
const testMatrix = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]
];

const directions = [  //4 directions
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

//3 constances to represent the orange state
const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = function(matrix) {
  if(matrix.length === 0) return 0;   //check null case

  const queue = [];  
  let freshOranges = 0; //keep count the fresh oranges
  
  for(let row = 0; row < matrix.length; row++) {  //2 for-loop for sequential order
    for(let col = 0; col < matrix[0].length; col++) { //row and column in double for loops
      if(matrix[row][col] === ROTTEN) {   //if it is the rotten orange based on the row and column
        queue.push([row, col])    //push this row and column to the queue
      }
      
      if(matrix[row][col] === FRESH) {  //if it is the fresh orange 
        freshOranges++;   //increment the fresh orange count
      }
    }
  }
    //implement BFS
  let minutes = 0;
  let currentQueueSize = queue.length;
  
  while(queue.length > 0) {   //while the queue has a length value
    if(currentQueueSize === 0) {    //if the current queue size is 0
      currentQueueSize = queue.length;  //reset the current queue size
      minutes++;    //increment the minutes
    }

    const currentOrange = queue.shift();  //shift off the value from queue
    currentQueueSize--;   //decrease the currentQueueSize since we just take it off
    const row = currentOrange[0]; //first value is the row
    const col = currentOrange[1]; //second value is the column
    
    for(let i = 0; i < directions.length; i++) {    //4 directions
      const currentDir = directions[i];   //each direction
      const nextRow = row + currentDir[0];  //each next row
      const nextCol = col + currentDir[1];  //each next column
      
      if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
        continue;   //if any above condition true, just skip current loop, continue
      }

      if (matrix[nextRow][nextCol] === FRESH) { //if the next row and next column one is the fresh orange
        matrix[nextRow][nextCol] = 2;   //set the fresh orange to rotten, update the value to 2
        freshOranges--;   //decrease the fresh orange count 
        queue.push([nextRow, nextCol]);   //push the row and column to the queue for next bfs 
      }
    }
  }
  
  if(freshOranges !== 0) {    //edge case - when there is fresh orange left (there are fresh orange we can not reach)
    return -1;
  }
  
  return minutes;   //when freshOranges === 0 just return the minutes
};

console.log(orangesRotting(testMatrix))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
double for loop and while loop will touch both time and space
//time: O(n)   
//space: O(n)  
//n is the total size of the array

step 8: can we optimize our solution?
