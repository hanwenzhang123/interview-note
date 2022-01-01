Given a 2D array containing 
  - 1(walls) 
  - 0(gates) 
  - INF(empty room)
each empty room with number of steps to the nearest gate
if it is impossible to reach to a gate, leave INF as the value. 
INF is equal to 2147483647.

step 1: verify the constraints
step 2: write out some test cases
//case 1
[
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];
[
  [3, -1, 0, 1],
  [2, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4]
]
//case 2
[
  [INF, -1, 0, INF],
  [-1, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];
[
  [INF, -1, 0, 1],
  [-1, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4]
]
//case 3
[] - []
[[]] - [[]]

step 3: figure out a solution without code
identify how many step to reach to the nearst gate (0)

step 4: write out our solution in code
const INF = 2147483647;

const testMatrix = [  //test 2d array
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];

//constances
const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;

const directions = [    //4 directions
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = (grid, row, col, count) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return;    //stop the dfs with above condition
  grid[row][col] = count  //change the current value based on row and col to currentStep
  for(let i = 0; i < directions.length; i++) {    //go around its 4 directions
    const currentDir = directions[i]; //each direction
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1); //recursive to next direction, count + 1
  }
}

//DFS driven solution - no return, just modify the rooms (matrix)
const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {  //2 for-loops for row and column
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0) //when we see a gate, then we perform dfs with current row col with first step 0
    }
  }
};

wallsAndGates(testMatrix)

console.log(testMatrix);

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
//n - total number inside of the matrix
//time: O(n)
//space: O(n)

step 8: can we optimize our solution?
 
