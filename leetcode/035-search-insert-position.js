var searchInsert = function(nums, target) {
    let tempIndex = nums.indexOf(target)
    if (tempIndex < 0) {
        if(target > nums[nums.length-1]){
            return nums.length
        } 
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] > target){
                return i;
            }
        }
    } else {
        return tempIndex
    }
};
