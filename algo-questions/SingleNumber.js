// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    if(nums.length <= 1) {
        return nums
    }
    
    let map = new Map()
    
   for(let i = 0; i < nums.length; i++) {
       if(map.has(nums[i])){
           map.set(nums[i], map.get(nums[i]) + 1)
       }else {
           map.set(nums[i], 1)
       }
   }
    
    for(let [k, v] of map) {
        if(map.get(k) === 1) {
            val = k
           return k
        }
    }
};