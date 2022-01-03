Backtracking
- return all solutions
- return a valid solution amongst all solutions

E.g. store, cafe, barber
- fill all paths we could take, first stop, second stop, end stop 

//Question: Sudoku Solver
Create a function that solves for any 9*9 soduku puzzle given.
Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:
Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

step 1: verify the constraints
board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.

step 2: write out some test cases
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

step 3: figure out a solution without code
step 4: write out our solution in code
//Time: O(9!)^9 - O(9)^81 - 9*9 to the 81 times
//Space: O(1) - O(81) - set size, constant space
const getBoxId = function (row, col) {  //get the 3*3 box id
  const rowVal = Math.floor(row / 3) * 3;
  const colVal = Math.floor(col / 3);

  return rowVal + colVal;
};

const isValid = function (box, row, col, num) {   //validaty
  if (box[num] || row[num] || col[num]) {
    return false;   //wrong cases if we have a value at above cases
  } else {
    return true;
  }
};

const solveBacktrack = function (board, boxes, rows, cols, r, c) {  //valid check
  if (r === board.length || c === board[0].length) {
    return true;    //boolean, whether or not continue
  } else {
    if (board[r][c] === '.') {  //when it has no value yet
      for (let num = 1; num <= 9; num++) {  //each number up to 9
        const numVal = num.toString();  //make number as string
        board[r][c] = numVal;   //add the value to the board

        const boxId = getBoxId(r, c);   //get correct box id
        const box = boxes[boxId]; //get the box
        const row = rows[r];  //get the row
        const col = cols[c];  //get the column

        if (isValid(box, row, col, numVal)) {   //decision => perform the check if valid
          box[numVal] = true;   //update the respected box column and row to true
          row[numVal] = true;
          col[numVal] = true;

          if (c === board[0].length - 1) {  //when we reach the end of the board, move to the next stpe through recursive calls
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {   //recursive call, increase the row, columb is 0
              return true;
            }
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {   //recursive call, stay at the same row, increase the column
              return true;
            }
          }

          delete box[numVal]; //remove the value
          delete row[numVal];
          delete col[numVal];
        }

        board[r][c] = '.';    //back to the empty
      }
    } else {  //when we reach the end of the board, move to the next stpe through recursive calls
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {  //recursive call, increase the row, columb is 0
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {  //recursive call, stay at the same row, increase the column
          return true;
        }
      }
    }
  }

  return false;   //not works, change to other values to try
};

var solveSudoku = function(board) {
  const n = board.length;
  const boxes = new Array(n), //data structure
        rows = new Array(n), 
        cols = new Array(n);
  
  for(let i = 0; i < n; i++) { //data structure
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }
  
  for(let r = 0; r < n; r++) {    //fill in with initial values inside the board
    for(let c = 0; c < n; c++) {  //loop through entire values
      if(board[r][c] !== '.') {   //when we have an initial value
        const boxId = getBoxId(r, c);   //get the box Id
        const val = board[r][c];    //value
        boxes[boxId][val] = true;   //mark it true
        rows[r][val] = true;   //mark it true
        cols[c][val] = true;   //mark it true
      }
    }
  }
  
  solveBacktrack(board, boxes, rows, cols, 0, 0);   //recursive check
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board)
console.log(board);

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
//Palindrome Partitioning
/*
### Question:

Leetcode question link: https://leetcode.com/problems/palindrome-partitioning/

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

###

### Solution Walkthrough:
The first thing we need to do is understand what the question is asking us, so we can start breaking down how to approach the problem. We also ened to consider possible test cases to ensure we understand our approach properly.

We know we're going to receive a string S, and our goal is to final ALL the possible ways we can partition the string into substrings so that each substring is a palindrome.

This means that we need to figure out a way to break the string S into all possible combinations of substrings where each substring is a palindrome. We add that combination of partitioned substrings into our final output array.

An easy way to start thinking about how we would tackle this is just to think about how we would do this logically. Imagine we had the substring "aaba". We would probably start partitioning the string from left to right, and figure out all possible partitions we can make from the FIRST partition.

We would start by thinking about all possile solutions that consist of the first ONE character ("a").

* "yes" represents a valid solution, "no" represents a invalid solution *

1) "a" , "a" , "b" , "a" -> yes
2) "a", "a", "ba" -> no
3) "a", "ab", "a" -> no
4) "a", "aba" -> yes

We would then do the same for the first TWO characters ("aa")

1) "aa", "b", "a" -> yes
2) "aa", "ba" -> no

Then the same for the first THREE characters ("aab")

1) "aab", "a" -> no

Then the same for the entire string ("aaba")

1) "aaba" -> no

Grouping these together, the correct answer we would return is:
[
  ["a", "a", "b", "a"],
  ["a", "aba"],
  ["aa", "b", "a"]
]

Thinking about optimizing our solution, let's look at the first 4 solutions we came up with by partitioning with the first character included ("a").

I want us to look at solution 3, ["a", "ab", "a"], as we are partitioning from left to right, the moment we saw that the middle partition "ab" is not a palindrome, we no longer needed to continue with that solution because it already failed our logic. This gives us a hint that we don't want to pursue a solution if it fails our palindromic check in the middle.

The fact that we need ALL possible solutions, and we know we can throw away solutions if they violate our logic in the middle of a solution means that this may be a good candidate for backtracking!

We already know how to create a solution around backtracking, the general format is:

1. Add current solution
2. Decide whether to continue or not (by recursing further)
3. Remove current solution

Breaking these 3 steps down, we know that step 1 is adding the current solution. In this case we need to figure out WHAT to add, and WHERE we're adding it. The WHERE in this case is an array that holds the partitioned substrings in the current iteration S. The WHAT is the partitions themselves. 

Deciding to recurse further or not, will be based on whether or not the latest partitioned substring is a palindrome. If it is a palindrome, we continue partitioning and checking from this point onwards, if it isn't, we skip.

To start, we already know the function that helps us determine with our string is a palindrome, except we need to pass it the entire string and starting/ending indexes that represent the bounds of the substring.

const isPalindrome = (start, end, str) => {
  while(start < end) {
    if(str[start] !== str[end]) return false;
    
    start++;
    end--;
  }
  
  return true;
}

Then we need to break down the recursive function that DRIVES the solution at this decision step. Looking back at the string "aaba" and our first character partitions, particularly solution 3 and 4:

3) "a", "ab", "a"
4) "a", "aba"

When we look at it solution 3, we're partitioning "a", "ab" and at this point we know "ab" is not a palindrome. We don't need to continue partitioning the last character ("a") so we DECIDE not to continue. At this point though, we're not done with these characters because if we continue and include the next character in the partition "aba", we see this is a valid palindrome! For this reason, we need to make sure our recursive solution is able to capture all these points together.

Building out the recursive function, what are we trying to capture:

const solve = () => {}

1. We have to keep track of our starting index which represent the first character in the substring that we're partitioning:

const solve = (startingIdx) => {}

2. We need to pass the string S:

const solve = (startingIdx, S)

3. We need to pass an array containing the substrings we've partitioned so far in this current iteration:

const solve = (startingIdx, S, partialSplits) => {}

4. We need to pass the final result array that will hold ALL our CORRECT solutions

const solve = (startingIdx, S, partialSplits, result) => {}

Now fleshing out the logic and filling out the backtracking template, we first realize that if our startingIdx has reached the END of the string, all our substrings in this iteration must be valid! We can then push these accumulated substrings into our result array. 

*REMEMBER* We need to duplicate the array that we push into our result array because our existing array is still being backtracked through, meaning values are being removed and added constantly! We just want to push in the SNAPSHOT of the current state of our array.

const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  }
}

Now the meat of our solution is going to be looping a second pointer through the remaining characters from our current startingIdx. This second pointer represents the last character in the current substring we're checking.

const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  } else {
    for(var i = startingIdx; i < S.length; i++) {
    }
  }
}

If the current substring IS a palindrome, we want to push it into our current partialSplits array, and continue our recursive solution partitioning through all possible further solutions with the NEXT character as the new startingIdx to represent the first character of our next substring.

const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  } else {
    for(var i = startingIdx; i < S.length; i++) {
      if(isPalindrome(startingIdx, i, S)) {
        const palindromeSnippet = S.slice(startingIdx, i + 1);
        partialSplits.push(palindromeSnippet);

        solve(i + 1, S, partialSplits, result);
      }
    }
  }
}

The last step is to remove the last substring we added, so we can try the next substrings that contain the existing characters.

const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  } else {
    for(var i = startingIdx; i < S.length; i++) {
      if(isPalindrome(startingIdx, i, S)) {
        const palindromeSnippet = S.slice(startingIdx, i + 1);
        partialSplits.push(palindromeSnippet);

        solve(i + 1, S, partialSplits, result);
        partialSplits.pop();
      }
    }        
  }
}

Putting it all together, our final answer is below!
 */

const isPalindrome = (start, end, str) => {
  while(start < end) {
    if(str[start] !== str[end]) return false;
    
    start++;
    end--;
  }
  
  return true;
}


const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  } else {
    for(var i = startingIdx; i < S.length; i++) {
      if(isPalindrome(startingIdx, i, S)) {
        const palindromeSnippet = S.slice(startingIdx, i + 1);
        partialSplits.push(palindromeSnippet);

        solve(i + 1, S, partialSplits, result);
        partialSplits.pop();
      }
    }        
  }
}

var partition = function(str) {
  const result = [];
  
  solve(0, str, [], result);
  
  return result;
};

const str = "aaba"

console.log(partition(str));


//N-Queens

/*
N-Queens is a very well known computer science problem for how backtracking as an algorithm can efficiently solve complex problems!

The core problem asks that if we were given the variable N. We are tasked with placing N queens on a N x N chessboard in such a way that no two queens are attacking each other. For a given N, return ALL distinct solutions of possible queen placements.

Each distinct solution in our returned answer should be a board configuration defined as a 2-D array which represents the N x N board. Queens are represented as ‘ Q ’ and empty spaces are represented as ‘ . ‘.

Leetcode question link: https://leetcode.com/problems/n-queens/


——— Breaking down the problem ———

In our particular case with N-Queens, we know the question is asking us to return ALL valid solutions. The fact that we know there are valid and invalid solutions, and the fact that we are tasked to return ALL valid solutions satisfies the condition that backtracking tries every possible solution, and does it efficiently because it throws away bad solutions EARLY if we realize at an early step in the solution that it’s invalid (and therefore all subsequent steps and solutions from this step are invalid). 

How does the question work though? Let’s first understand how queens attack. Let's imagine we had a queen placed in the middle of a 5 x 5 board.

 _______________________________________
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   Q   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|

A queen can attack across the board both vertically, horizontally, and diagonally (represented by the A's).

Vertically
 _______________________________________
|       |       |       |       |       |
|       |       |   A   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   A   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   Q   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   A   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   A   |       |       |
|_______|_______|_______|_______|_______|


Horizontally
 _______________________________________
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|   A   |   A   |   Q   |   A   |   A   |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |       |       |       |
|_______|_______|_______|_______|_______|


Diagonally
 _______________________________________
|       |       |       |       |       |
|   A   |       |       |       |   A   |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |   A   |       |   A   |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |       |   Q   |       |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|       |   A   |       |   A   |       |
|_______|_______|_______|_______|_______|
|       |       |       |       |       |
|   A   |       |       |       |   A   |
|_______|_______|_______|_______|_______|

  


