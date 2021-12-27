//Understanding Binary Search
Time: O(log n)
Space: O(1)

const binarySearch = function(array, target){
  let left = 0, right = array.length - 1;
  while(left <= right){
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if(foundValue === target){
      return mid;
    } else if(foundValue < target){
      left = mid + 1;   //move the pointer to the middle pointer + 1 with right pointer at the end
    } else {
      right = mid - 1;  //else, we move the right pointer one index before the middle target
    }
  }
  return -1;
}

step 1: verify the constraints
//Question: Start and End of Target in a sorted array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

step 2: write out some test cases
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]   //start and end index

Input: nums = [1,2,3,4,5,6], target = 4
Output: [3,3] 

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Input: nums = [], target = 0
Output: [-1,-1]

step 3: figure out a solution without code
step 4: write out our solution in code
//Time: O(log n) - consistently with binary search
//Space: O(1)
const array = [1,3,3,5,5,5,8,9];
const targetToFind = 5;

const binarySearch = (nums, left, right, target) => {   //O(log n) time
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {   //split in the middle
      return mid;  //return middle point when foundVal === target
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;    //when foundVal !== target
};

const searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];   //when num array not valid
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1]; //when firstPos === -1, no target found in binary search

  let endPos = firstPos, //if we found nothing, still equal to the first value
    startPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) { //when we do not return -1 from binary search
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target); //update startPos with right pointer - 1 during each while iteration
  }
  startPos = temp1;

  while (endPos !== -1) { //when we do not return -1 from binary search
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target); //update startPos with left pointer + 1 during each while iteration
  }
  endPos = temp2;

  return [startPos, endPos];    //start index and end index
};

console.log(searchRange(array, targetToFind))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
  
  
