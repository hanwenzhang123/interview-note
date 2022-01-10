//010722 - BeaconFire
//Sliding Window Technique


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
