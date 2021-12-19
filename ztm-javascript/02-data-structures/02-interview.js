Given 2 arrays, create a function that let is a user know (true/false) whether these two arrays contain any common items

for example:
const array 1 = ['a', 'b', 'c', 'x'];
const array 2 = ['z', 'y', 'i'];
//should return false

const array 1 = ['a', 'b', 'c', 'x'];
const array 2 = ['z', 'y', 'x'];
//should return true

2 parameters - arrays - no size limit
return true or false

//O(n^2)


const array 1 = ['a', 'b', 'c', 'x'];
const array 2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

//O(n^2)  - time complexity 
//O(a*b)
//O(1) - space complexity


const array 1 = ['a', 'b', 'c', 'x'];
const array 1 = ['z', 'y', 'x'];

//array1 ==> obj {
// a:true,
// b:true,
// c:true,
// x:true,
// }
// array2[index] === obj.properties

//Hash Table
function containsCommonItem2(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  //can we assume always two parameters?
  let map = {};
  for(let i=0; i<arr1.length; i++) {
    if(!map[arr1[i]]){
      const item = array1[i];
      map[item] = true;
    }
  }
  console.log(map)
  
  //loop through second array and check if item in second array exists on created object
  for (let j=0; j<arr2.length; j++) {
    if(map[arr2[j]]) {
        return true;
      }
  }
  return false
}

//O(a+b) - if the array is large, when it comes to time complexity, it is better than nested loops
//O(a)  - space complexity - we are adding new array, more heavy on space complexity, but faster in time

containsCommonItem2(arr1, arr2)


//using javascript built-in methods - more readable
function containsCommonItem3(arr1, arr2) {  
  return arr1.some(item => arr2.includes(item))  //true/false
}

containsCommonItem3(arr1, arr2)
  
  
