
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
