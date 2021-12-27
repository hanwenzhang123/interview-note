//Question #3: Tapping Rainwater (Hard)
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

step 1: verify the constraints
will there be any negative intergers?
  no, assume all integers are positive

step 2: write out some test cases
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9

[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2] //8
[]  //0
[3] //0
[3, 4, 3] //0

step 3: figure out a solution without code
- we need to use the entire array to figure out the water can be held

currentWater = min(maxLeft, maxRight)- currentHeight
total = adds up the currentWater
maxL = moves the pointer
maxR = largest number in array

step 4: write out our solution in code
//trapping rainwater - brute force solution
// Time: O(n^2) 
// Space: O(1)

const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

const getTrappedRainwater = function(heights) {
  let totalWater = 0;   //will return the total water value
  
  for(let p = 0; p < heights.length; p++) { //pointer across the array, iterate p value through the array
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;   //initialize 4 variables

    while(leftP >= 0) {   //for the y axis, the height
      maxLeft = Math.max(maxLeft, heights[leftP]);  //current stored maxLeft and heights[leftP]
      leftP--;  //decrement left pointer
    }

    while(rightP < heights.length) {  //for the x axis, the rightP less than the length of the array
      maxRight = Math.max(maxRight, heights[rightP]);   //get the maxRight value
      rightP++; //increment right pointer
    }
    
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];  //calculate the current water, substract where the p is currently at
    
    if(currentWater >= 0) {
      totalWater += currentWater;   //add up the total water
    }
  }

  return totalWater;
}

console.log(getTrappedRainwater(elevationArray));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity

step 8: can we optimize our solution?
//trapping rainwater - optimal solution - two pointers
// Time: O(n) - only touch each array element once
// Space: O(1)
  
/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards (left or right)
4. repeat for other pointer
 */
  
const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

const getTrappedRainwater = function(heights) {

  let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;
  
  while(left < right) {   //have not overlapped yet
    if(heights[left] <= heights[right]) {   //identify which pointer to operate, the one with less value
      if(heights[left] >= maxLeft) {  //check if the left side is greater than maxLeft value
        maxLeft = heights[left]   //update the maxLeft
      } else { 
        totalWater += maxLeft - heights[left];  //add and calculate the total water
      }
      left++;   //move left pointer inwards
    } else {    //heights[left] >= heights[right]
      if(heights[right] >= maxRight) {  //if right pointer value is larger than maxRight value
          maxRight = heights[right];    //update the maxRight
      } else {
          totalWater += maxRight - heights[right];  //add and calculate the total water
      }
      right--;  //move right pointer inwards
    }
  }

  return totalWater;
}

console.log(getTrappedRainwater(elevationArray));
  
