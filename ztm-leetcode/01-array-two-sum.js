//Question #1 Two Sum (Easy)
Given an array of integers, return the indices of the two numbers that add up to a given target.
e.g. [1, 3, 7, 9, 2]  target: 11  answer: [3, 4]

step 1: verify the constraints
- are all the numbers positive or can there be negatives? all numbers are positive
- are there duplicate numbers in the array? no, there are no duplicates
- will there always be a solution available? no, there may not always be a solution
- what do we return if there is no solution? just return null.
- can there be multiple pairs that add up to the target? no, only 1 pair of number will add up to the target

step 2: write out some test cases

step 3: figure out a solution without code
- two pointer technique
- p1 points at a value, p2 move based on specific logics (test every possible combination)
- numberToFind = target - nums[p1]

step 4: write out our solution in code
//brute force solution
const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  for(let p1 = 0; p1 < nums.length; p1++) {   //p1=0
    
    const numberToFind = target - nums[p1];   //ntf=10

    for(let p2 = p1 + 1; p2 < nums.length; p2++) {  //p2=1
      if(numberToFind === nums[p2]) {
        return [p1, p2];  //solution exist
      }
    }
  }
  return null;  //no solution
};

step 5: double check for errors

step 6: test our code with our test cases

step 7: space & time complexity
time complexity: how many more iterations does your code have to run if the array gets bigger?
  - iteration: 1 loop run O(n); 2 loops run n*n, so 2 nested for loops run O(n^2) 
space complexity: O(1)

Big O
//Polynomial time and space complexity
O(LogN) - Logarithmic
O(N) - Linear
O(NlogN) - Linearithmic
O(N^2) - Quadratic
O(N^3) - Cubic

Base is always N
- if there is a dynamic element inside of this complexity,
- it is in the base and not in the exponent.

//Exponential time and space complexity
O(2^N) - Exponential
O(!N) - Factorial
O(N^N) - Exponential

X^N 
- all of these complexities scale with the input at the exponent level.
- the exponent is the dynamic variable!
- even though you can end up with cases where you do have a base that is also dynamic

//exponential should be the biggest sign that your solution definitely can be optimized.
//polynomial "n log n" and "n^2" are also considered bad, vary based on complex questions

The code above at step 4:
Time: O(N^2) - no good, better to improve
Space: O(1) - good
1st loop - calculate ntf
2nd loop - nums[p2] === ntf

step 8: Can we optimize our solution?
//using hash map - because lookup we use O(1) when we have the key
//{numberToFind: index}
const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) { 
    const currentMapVal = numsMap[nums[p]];   //nums[p] is the number in array, currentMapVal is the index
      //have we already generated this number to find? if the value exists inside of nums map, then get back the index; if not, undefined
    if(currentMapVal >= 0) {    //in JS, 0 is falsy value
      return [currentMapVal, p];    //correct number
    } else {      //generate the index if not exist
      const numberToFind = target - nums[p];    //get the ntf from the number we are looking at
      numsMap[numberToFind] = p;      //assign the index as the value for the key here
    }
  }
  return null;  //if no valid solution exist
}
console.log(findTwoSum(numsArray, targetToFind));

Time: O(N)
Space: O(N)
 
