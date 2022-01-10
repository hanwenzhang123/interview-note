let maxSubArray = function(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length ; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]); //compare the current number with the maxCurrent + current number, then update the max number of this sub-array
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;     //update the maxGlobal
      }
    }

    return maxGlobal;
};

var maxSubArray = function(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
  	sum += nums[i]
	max = Math.max(max, sum); // Get the max of max and sum
	if (sum < 0) {           // If the sum is less than 0, reset the sum to 0
		sum = 0;
	}
  }
  return max;
  
};
