You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.

- recognize it is a dynamic programming problem
- once you see minimum or maximum, you know it is optimization question
- recursion - the first solution of dynamic programming type of questions
const myRecursiveFunc = function(args){
  basecases
  myRecursiveFunc(...);
}
- recurrence relation - formula for the basis of a recursive solution

//Understanding & Identifying Recurrence Relation
- formula that helps us understand what the actual recursive function we are trying to write is going to be
- recursive function is a fnnction that calls itself and it has base cases that determine when this self calling nature has reached an end

minCost(i) = cost[i] + min(minCost(i-1), minCost(i-2))
if i<0 then just return 0
0 is very first step to take, either i===0(cost[0]) or i===1(cost[1])

//Test Cases
Input: cost = [10,15,20]
Output: 15

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6

//Solutions
1.First Step - Recursive Solution From Recurrence Relation

//Min cost climbing stairs - Top down recursion
/*
Recurrence relation:
minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];
*/
//Time: O(2^N)
//Space: O(N)

const minCostClimbingStairs = function(cost) {
  const n = cost.length;  //n is the total lengthof the cost array
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));  //both 1 step or 2 steps, and pass the cost array
};

const minCost = function(i, cost) {
  if(i < 0) return 0;   //if step i less than 0, just return 0
  if(i === 0 || i === 1) return cost[i];  //get the current value when step i is 0 or i is 1
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));  //continue recursive call
}

console.log(minCostClimbingStairs([20, 15, 30, 5]))

2. Second Step - Memoizing Our Redundant Recursive Calls
//dynamic programming - memoization optimization
//Time: O(N)
//Space: O(N)
const minCostClimbingStairs = function(cost) {
  const n = cost.length;
  const dp = [];  //save the value in dp
  return Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
}

const minCost = function(i, cost, dp){
  if(i<0) return 0;
  if(i === 0 || i === 1) return cost[i];
  if(dp[i] !== undefined) return dp[i];   //if we have the value we saved in dp, just retrieve we what have at dp[i]
  dp[i] = cost[i] + math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));   //otherwise we calculate the value and save in dp
  return dp[i];  //return the value we saved in dp
}

3. Third Step - Bottom Up Tabulation
//Min cost climbing stairs - Bottom up iterative
/*
Recurrence relation:
minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];
*/
//Time: O(N)
//Space: O(N)
const minCostClimbingStairs = function(cost) {
  const n = cost.length;    //get the length
  if(n === 0) return 0;   //if cost has no length
  if(n === 1) return cost[0];   //if the length of the cost only 1
  const dp = [];    //will store here
  for(let i = 0; i < n; i++) {  //get each step
    if (i < 2) {  //first and second one
      dp[i] = cost[i];  //store in the dp value
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);   //update the dp[i]
    }
  }

  return Math.min(dp[n - 1], dp[n - 2]);  //get the last 2 values from dp, and return the min value
};

console.log(minCostClimbingStairs([20, 15, 30, 5]))

4. Fourth Step - Bottom Up Optimization
 //Min cost climbing stairs - Bottom up iterative optimized
/*
Recurrence relation:
minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];
*/
//Time: O(N)
//Space: O(1)
const minCostClimbingStairs = function(cost) {
  const n = cost.length;
  if(n === 0) return 0;
  if(n === 1) return cost[0];
  let dpOne = cost[0];    //the first value
  let dpTwo = cost[1];    //the second value
  for(let i = 2; i < n; i++) {  //loop through
    const current = cost[i] + Math.min(dpOne, dpTwo); //generate the current value
    dpOne = dpTwo;    //replace the dpOne as dpTwo
    dpTwo = current;    //update the dpTwo value as current value
  }

  return Math.min(dpOne, dpTwo);    //get the min of these two values
};

console.log(minCostClimbingStairs([20, 15]))
 
