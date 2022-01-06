var removeDuplicates = function(nums) {
    let k = 0;
    if(nums.length === 0) return k;
    for (let i=0; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

var removeDuplicates = function(nums) {
    let k = 0;
    if(nums.length === 0) return k;
    for (let i=1; i<nums.length; i++) {
        if(nums[k] !== nums[i]){
            k++;
            nums[k] = nums[i];
        }
    }
    return k+1;
};
