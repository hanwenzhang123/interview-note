//01/07/22 - BeaconFire
//Sliding Window Technique
function maxSubArray(nums, size){
  if(size<0 || size>arr.length) return null;
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for(let i = 0; i < nums.length; i++){
    currSum += nums[i];
    if(i >= size-1){
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i-(size-1)];
    }
  }
  return maxSumSeen;
}
const arr = [1,2,3,4,5,4,8,6,2];
console.log(maxSubArray(arr,3));

//Question: pick 3 element either from beginning or end, and return the max adding num from the array.
const calculation = (arr, k) => {
  const start = arr.slice(0, k);
  let startSum;
  let tempSum;
  let maxSum = startSum;
  for (let i = 0; i < start.length; i++) {
    startSum += start[i];
    for (let j = 0; j <= k; j++) {
      tempSum = tempSum - arr[i - j] + arr[j];
      maxSum = Math.max(tempSum, maxSum);
    }
  }
  return maxSum;
};


//01/10/22 - Analytic Partners
//Anagram - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

var firstWord = "Marry";
var secondWord = "Armmy"; 

const isAnagram = (firstWord, secondWord) => {

  if(firstWord.length !== secondWord.length) return false;
  
  let map1 = {};
  let map2 = {};
  
  const firstWordLower = firstWord.toLowerCase();
  const secondWordLower = secondWord.toLowerCase();
  
  for(let i=0; i<=firstWordLower.length; i++){	//O(N)
    if(map1[firstWordLower[i]]){
    	map1[firstWordLower[i]] += 1;
    } else {
    	map1[firstWordLower[i]] = 1;
    }
  }
  
  for (let j=0; j<=secondWordLower.length; j++){ //O(N)
    if(map2[secondWordLower[j]]){
    	map2[secondWordLower[j]] += 1;
    } else {
    	map2[secondWordLower[j]] = 1;
    }
  }
  
  for (let key in map1) {		//O(N)
  	if(map1[key] !== map2[key]) {	
    	return false;
    }
  }
  
  return true;
}

console.log(isAnagram(firstWord, secondWord));
 
