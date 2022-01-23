//Solution #1
var moveZeroes = function(nums) {
    let count = 0;
  
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1);
            count++;
            i--;
        }
    }
  
    while (count > 0){
        nums.push(0)
        count--;
    }
  
    return nums;
};

//Solution #2
var moveZeroes = function(nums) {
    for(let i = nums.length -1; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};

//Solution #3
var moveZeroes = function(nums) {
    let pointer = 0, counter = 0;
    while(pointer <= nums.length && counter <= nums.length){
         if(nums[pointer] === 0){ 
            nums.splice(pointer,1);
            nums.push(0)
         } else {
            pointer++; 
         }
          counter++; 
    }
    return nums
    
};
