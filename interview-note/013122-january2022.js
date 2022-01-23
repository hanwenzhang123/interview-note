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

//Question: 1423. Maximum Points You Can Obtain from Cards
//https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
//pick k element either from beginning or end, and return the max adding num from the array.
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

// class Solution {
//     public int maxScore(int[] cardPoints, int k) {
//         //Approach: DP
//         int n = cardPoints.length;

//         int prefixSum = 0;
        
//         for(int i = 0; i < k; i++){
//             prefixSum += cardPoints[i];
//         }
        
//         int maximumScore = prefixSum;
//         int suffixSum = 0;
        
//         for(int i = 0; i < k; i++){
//             prefixSum -= cardPoints[k - 1 - i];
//             suffixSum += cardPoints[n - 1 - i];
                
//             maximumScore = Math.max(maximumScore, prefixSum + suffixSum);
//         }
    
//         return maximumScore;
//     }
// }


//01/10/22 - Analytic Partners
//Anagram - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

var firstWord = "Marry";
var secondWord = "Armmy"; 

//O(3N) => O(N)

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
 

//01/20/2022 - Analytic Partners
let vacStatus = [
	{"st": "Connecticut", "date": "12/06/2021", "vac": 3031723},
	{"st": "New Jersey", "date": "01/11/2022", "vac": 7564407},
	{"st": "New York", "date": "01/10/2022", "vac": 16626152},
	{"st": "Pennsylvania", "date": "01/11/2022", "vac": 10218537},
	{"st": "Rhode Island", "date": "01/11/2022", "vac": 961320},
	{"st": "Vermont", "date": "01/11/2022", "vac": 564218},
];

let census2020 = [
    {"st": "Connecticut", "ppl": 3605944},
    {"st": "Maine", "ppl": 1362359},
    {"st": "Massachusetts", "ppl": 7029917},
    {"st": "New Hampshire", "ppl": 1377529},
    {"st": "Rhode Island", "ppl": 1097379},
    {"st": "Vermont", "ppl": 643077},
];

// vaccination rate = vac / ppl:
// Conn r = 3031723 / 3605944 = 0.7
// Rhode Island r = 961320 / 1097379 = 0.9

// Jan 12, 2022 -> 	1642022959
// Jan 11, 2022 -> 	1641936559
// let convertDateToTs = function(date) {
// 	// date: "01/12/2022"
// 	let timeStamp = new Date() ... getTime()
// 	return timeStamp;
// }

//Solution
let vacRate = [];
for (i = 0; i < vacStatus.length; i++ ){
	let state = vacStatus[i]["st"]
  let vacPpl = vacStatus[i]["vac"]
  let tempData = {"st": state, "r": null};
  for (let each of census2020) {
  	if(each["st"] == state){
    	let pplInfo = each.ppl;
      tempData = {"st": state, "r": vacPpl / pplInfo};
      vacRate.push(tempData)
  	}
  }
  vacRate.push(tempData)
}
console.log(vacRate)

// Your result should look like:
let vacRate = [
	{"st": "Connecticut", "r": 3031723 / 3605944},
	{"st": "New Jersey", "r": null},
	{"st": "New York", "r": null},
	{"st": "Pennsylvania", "r": null},
	{"st": "Rhode Island", "r": 961320 / 1097379},
	{"st": "Vermont", "r": 564218 / 643077},
];


//01/20/2022 - Analytic Partners - Revised
let vacStatus = [
    {"st": "Connecticut", "date": "12/05/2021", "vac": 3031233},
    {"st": "Connecticut", "date": "12/06/2021", "vac": 3031723},
    {"st": "New Jersey", "date": "01/08/2022", "vac": 7554407},
    {"st": "New Jersey", "date": "01/09/2022", "vac": 7560007},
    {"st": "New Jersey", "date": "01/10/2022", "vac": 7562207},
    {"st": "New Jersey", "date": "01/11/2022", "vac": 7564407},
    {"st": "New York", "date": "01/09/2022", "vac": 16625152},
    {"st": "New York", "date": "01/10/2022", "vac": 16626152},
    {"st": "Pennsylvania", "date": "01/10/2022", "vac": 10208537},
    {"st": "Pennsylvania", "date": "01/11/2022", "vac": 10218537},
    {"st": "Rhode Island", "date": "01/11/2022", "vac": 961320},
    {"st": "Vermont", "date": "01/11/2022", "vac": 564218},
];

let census2020 = [
    {"st": "Connecticut", "ppl": 3605944},
    {"st": "Maine", "ppl": 1362359},
    {"st": "Massachusetts", "ppl": 7029917},
    {"st": "New Hampshire", "ppl": 1377529},
    {"st": "Rhode Island", "ppl": 1097379},
    {"st": "Vermont", "ppl": 643077},
];

//Solution
for(let i = 1; i < vacStatus.length; i++){
  let tempData = vacStatus[i]["st"];
  let lastData = vacStatus[i - 1]["st"];
  if(tempData === lastData) {
  	vacStatus.splice(i-1, 1);
  }
}
console.log(vacStatus);

const rate = vacStatus.map((status) => {
  const currentCensus = census2020.find((census) => census.st === status.st);
  let vacRate;
  currentCensus ? vacRate = status.vac / currentCensus.ppl : vacRate = null;
  /* const vacRate = status.vac / currentCensus?.ppl || null; */

  return {
    st: status.st,
    r: vacRate,
  };
});
console.log(rate) 

// Your result should look like:
let vacRate = [
    {"st": "Connecticut", "r": 0.8407570943974726},
    {"st": "New Jersey", "r": null},
    {"st": "New York", "r": null},
    {"st": "Pennsylvania", "r": null},
    {"st": "Rhode Island", "r": 0.8760145765501254},
    {"st": "Vermont", "r": 0.8773723830894279},
];
