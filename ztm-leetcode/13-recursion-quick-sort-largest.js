//Recursion
Data Structures
- 2d array/matrixes
- binary trees
- heaps
- graphs
Algorithmic
- sorting
- greedy method
- divide and conquer
- dynmaic programming
- back tracking

// Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

step 1: verify the constraints
can we get an array where k is larger than the array length? no, assume an answer is always available

step 2: write out some test cases
Input: nums = [3,2,1,5,6,4] -> [1,2,3,4,5,6], k = 2
Output: 5

Input: nums = [2,3,1,2,4,2] -> [1,2,2,2,3,4], k = 4
Output: 2

Input: nums = [3,2,3,1,2,4,5,5,6] -> [1,2,2,3,3,4,5,5,6], k = 4
Output: 4

step 3: figure out a solution without code
//Quicksort
Divide & Conquer
1. multi-branched recursion
2. breaks a problem into multiple smaller but same sub-problems
3. combines the solutions of sub-problems into the solution for the original problem
pick a random pivot then compare and place the numbers to either left or right
then use this pivot point as the middle, left and right list then compare and sort

step 4: write out our solution in code
//Find kth largest element - Quicksort
//Time: O(n log n)
//Space: O(log n)

const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];    //the value we want to swap
  array[i] = array[j];  //let the i one becomes j
  array[j] = temp;  //let the j one becomes temp value
};

const getPartition = function (nums, left, right) {
  const pivotElement = nums[right]; //pivot pointer
  let partitionIdx = left;  //start from left, will change, like the i

  for (let j = left; j < right; j++) {  //j iterate through the array
    if (nums[j] <= pivotElement) {    //check the j element
      swap(nums, partitionIdx, j);  //swap
      partitionIdx++;   //increment partitionIdx
    }
  }
  swap(nums, partitionIdx, right) //swap again

  return partitionIdx;  //get the index, where to split the code
};

const quickSort = function (nums, left, right) {  //entire array, starting index, right index(the end of array)
  if(left < right) {
    const partitionIndex = getPartition(nums, left, right); //array, left and right pointer

    quickSort(nums, left, partitionIndex - 1);  //recursive, right pass to partitionIndex - 1, where to split the code
    quickSort(nums, partitionIndex + 1, right); //recursive, left pass to partitionIndex + 1, where to split the code
  }
};  //sorting the array in place, nothing to return

var findKthLargest = function (nums, k) {   //the function to find kth largest
  const indexToFind = nums.length - k;    //index to find from the sorted array
  quickSort(nums, 0, nums.length - 1);  //entire array, starting index, right index(the end of array)
  return nums[indexToFind]    //the kth largest number
};

console.log(findKthLargest(array, kToFind))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
Time: O(N)
Space: O(N)

step 8: can we optimize our solution?
Hoare QuickSelect Algorithm
-find kth smallest element in an unordered list
-k=2, index to find = length - k;

//Find kth largest element - Quickselect
const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i - 1;
};

const quickSelect = function (nums, left, right, indexToFind) { //4th argument for index we are looking for
  const partitionIndex = getPartition(nums, left, right);

  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
};

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

console.log(findKthLargest(array, kToFind))
  
