var majorityElement = function(nums) {
    let majorityCount = nums.length/2;
    let map = {};
    for (let num of nums){
        if(!map[num]){
            map[num]=1;
        } else {
            map[num]++;
        }
    }
    for(let count in map) {
      if (map[count] > majorityCount) {
          return count;
      }
    }
    return 0
};
