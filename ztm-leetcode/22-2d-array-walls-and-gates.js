Given a 2D array containing - 1(walls) 0(gates) and INF(empty room), each empty room with number of steps to the nearest gate
if it is impossible to reach to a gate, leave INF as the value. INF is equal to 2147483647.

step 1: verify the constraints
step 2: write out some test cases
step 3: figure out a solution without code
step 4: write out our solution in code
const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = (grid, row, col, count) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return
  grid[row][col] = count
  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
}


const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0)
    }
  }
};

wallsAndGates(testMatrix)

console.log(testMatrix);

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?

