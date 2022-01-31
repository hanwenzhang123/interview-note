// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    let result = nums[0]
    let currentSum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
            currentSum = Math.max((currentSum + nums[i]), nums[i])
            result = Math.max(currentSum, result)   
}
    return result
};