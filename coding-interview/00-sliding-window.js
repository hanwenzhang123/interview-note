Sliding Window Tips
- Things we iterate over sequentially
  - contiguous sequence of elements
  - strings, arrays, linked list
- min, max, longest, shortest, contained
  - maybe we meed to calculate and record the value
  
// Question Variants
fixed length 
  - max sum subarray of size k
dynamic variant
  - smallest sum >= to some value s
dynamic variant with auxillary data structure
  - longets substring with no more than k distinct characters
  
commmonalities?
  - everything grouped sequentially
  - longest / smallest / contains / max / min

//Sliding Window
const arr = [10,20,30,40,50,60,70]
const k = 3 //180

function maxSum(arr, k){
  if(k>arr.length){
    return "invalid";
  }
  let windowTotal = 0;
  for(let i=0; i<k; i++){
    windowTotal += arr[i] 
  }
  let maxSumResult = windowTotal;
  for(let i=k; i<arr.length; i++){  //slide the window
    windowTotal += arr[i] - arr[i-k];
    maxSumResult = Math.max(windowTotal, maxSumResult)
  }
}


//Returns maximum sum in a subarray of size k.
let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 4;
let n = arr.length;

//Brute Force - O(n*k) 
function maxSum(arr, n, k){
    let max_sum = 0;
	
    for (let i = 0; i < n - k + 1; i++) {
        let current_sum = 0;
        for (let j = 0; j < k; j++){
            current_sum = current_sum + arr[i + j];
	      }
        max_sum = Math.max(current_sum, max_sum);
    }
 
    return max_sum;
}

//Sliding Window Technique
function maxSubArray(nums, size){
  if(size<0 || size>arr.length) return null;
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for(let i = 0; i < nums.length; i++){
    currSum += nums[i];
    if(i >= size-1){
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i-(size-1)];
    }
  }
  return maxSumSeen;
}
const arr = [1,2,3,4,5,4,8,6,2];
console.log(maxSubArray(arr,3));
