//010722 - BeaconFire
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

//Question: pick 3 element either from beginning or end, and return the max adding num from the array.
const calculation = (arr, k) => {
  const start = arr.slice(0, k);
  let startSum;
  let tempSum;
  let maxSum = startSum;
  for (let i = 0; i < start.length; i++) {
    startSum += start[i];
    for (let j = 0; j <= k; j++) {
      tempSum = tempSum - arr[i - j] + arr[j];
      maxSum = Math.max(tempSum, maxSum);
    }
  }
  return maxSum;
};
