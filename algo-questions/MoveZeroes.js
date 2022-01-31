// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
      
    if(nums.length === 1 && nums[0] === 0) {
        return nums
    }
    
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0 ) {
            nums.push(nums[i])
            nums.splice(i, 1)
        }
    }
    return nums
};