// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let j = target - nums[i]
        if(map.has(j)) {
            return [map.get(j), i]
        }
        map.set(nums[i], i)
    }
};