//Knight Probability In Chessboard
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. 
The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
A chess knight has eight possible moves it can make, as illustrated below. 
Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly k moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.

step 1: verify the constraints
how many decimals do we round to? do not round, leave the answer as is.

step 2: write out some test cases
//n mean board n*n chessboard
//K can be whatever value
//row
//column
Input: n = 3, k = 2, row = 0, column = 0
Output: 0.06250

Input: n = 1, k = 0, row = 0, column = 0
Output: 1.00000

step 3: figure out a solution without code
//Identifying the Recurrence Relation
N knightP(k, r, c) = K (x, y) <- Directions knightP(k-1, r+x, c+y) / 8
0<=r<n, 0<=c<n
r<0||r>n||c<0||c>n
knightP(k,r,c) = 0

step 4: write out our solution in code
//Solutions
1. First Step - Recursive Solution From Recurrence Relation
//Knight in chessboard probability - Top down recursive
/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 <= r < N, 0 <= c < N, k === 0
probability(r, c, k) = 1

0 <= r < N, 0 <= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0
 */

//Time: O(8^k)
//Space: O(8^k)

const DIRECTIONS = [  //8 different directions on chessboard
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(N, K, r, c) {
  if (r < 0 || c < 0 || r >= N || c >= N) {   //conditions that return 0
    return 0;
  }

  if (K === 0) {    //when k===0 return 1
    return 1;
  }

  let res = 0;    //initial value, will add up from recursive call

  for (let dir of DIRECTIONS) {   //for each direction
    res += knightProbability(N, K - 1, r + dir[0], c + dir[1]) / 8;   //recursive call based on direction
  }

  return res;   //res will be the response result
};

console.log(knightProbability(6, 2, 2, 2))

2. Second Step - Memoizing Our Redundant Recursive Calls
//Knight move probability - Top down recursive with DP
/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0
 */

//Time: O(N^2*K)
//Space: O(N^2*K)

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

const recurse = (N, K, r, c, dp) => {
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  if (dp[K][r][c] !== undefined) return dp[K][r][c];  //as long as not undefined, which means we have loop through previously, just return the value at that dp location

  let res = 0;
  for (let dir of DIRECTIONS) {
    res += recurse(N, K - 1, r + dir[0], c + dir[1], dp) / 8; //update added res through recursion
  }

  dp[K][r][c] = res;  //save res to the dp location

  return dp[K][r][c]; //return the value
};

var knightProbability = function(N, K, r, c) {
  //generate a 2D array, for every single value we put undefine as caching 
  const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));  

  return recurse(N, K, r, c, dp);
};

console.log(knightProbability(6, 2, 2, 2))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
//Solutions
3. Third Step - Bottom Up Tabulation
//Knight move probability - Bottom up iterative
/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 <= r < N, 0 <= c < N, k === 0
probability(r, c, k) = 1

0 <= r < N, 0 <= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r >= N, c < 0 || c >= N
probability(r, c, k) = 0
 */

//Time: O(N^2*K)
//Space: O(N^2*K)

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(N, K, r, c) {
  //set up the dp with 2d array filled with 0 as initial value
  const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));

  dp[0][r][c] = 1;    //start with 1 for the k
  for (let step = 1; step <= K; step++) { //current step
    for (let row = 0; row < N; row++) { //row
      for (let col = 0; col < N; col++) { //column
        for (let i = 0; i < DIRECTIONS.length; i++) {   //build up all the directions we have
          const dir = DIRECTIONS[i];    //each direction
          const prevRow = row + dir[0]; //previous row
          const prevCol = col + dir[1]; //previous column
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) { //condition to fill the dp
            dp[step][row][col] =
              dp[step][row][col] + dp[step - 1][prevRow][prevCol] / 8;    //fill the value in to dp
          }
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < N; i++) {   //scan through the entire n*n chessboard
    for (let j = 0; j < N; j++) {
      res += dp[K][i][j];   //update res
    } 
  }

  return res;   //return the updated resa
};

console.log(knightProbability(6, 3, 2, 2))

4. Fourth Step - Bottom Up Optimization
//Knight move probability - Bottom up iterative optimized
/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0
 */

//Time: O()
//Space: O(8^k)

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(N, K, r, c) {
  let prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  let nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));

  prevDp[r][c] = 1;
  for (let step = 1; step <= K; step++) {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const currentDirection = DIRECTIONS[i];
          const prevRow = row + currentDirection[0];
          const prevCol = col + currentDirection[1];
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
            nextDp[row][col] =
              nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDp = nextDp;
    nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  }

  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += prevDp[i][j];
    }
  }

  return res;
};

console.log(knightProbability(6, 2, 2, 2))
  
