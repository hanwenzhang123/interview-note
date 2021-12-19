// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// Given an array = [2,3,4,5]
// it should return undefined


//First comes to mind - loop
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {  //looping through arrays
    for (let j = i + 1; j < input.length; j++) {  //start from i+1 to always compare the next indexes
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} //O(n^2)
//O(1) - space better but slower

//Using hash tables (objects)
function firstRecurringCharacter2(input) {
  let map = {}; //key will be unique, no duplicate keys
  for (let i = 0; i < input.length; i++) {  //loop through everything and adding then check if the key exists
    if (map[input[i]] !== undefined) {  //as soon as map[input[i]] does not equal to undefined (since we add it to the map array where is empty)
      return input[i]   //if the key already exists, then stop looping and return the input
    } else {
      map[input[i]] = i;  //otherwise if not exists, add it to the app
    }
  }
  return undefined;   //in case if no match
}//O(n) - faster


firstRecurringCharacter2([1,5,5,1,3,4,6])

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
// // using above function
// firstRecurringCharacter2 // 5
// firstRecurringCharacter  // 2 - wrong
   
// brute solution
function firstRecurringCharacter(arr){
    const recurIdex = [];
    for (let i =0; i < arr.length - 1; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                recurIdex.push(j);    //making it push to the array
            }
        }
    }
    // console.log(recurIdex)
    // console.log([Math.min(...recurIdex)]);
    return arr[Math.min(...recurIdex)];
}

// hash table solution 
function firstRecurringCharacter2(arr){
    let hash = {};    //the object
    for (let i = 0; i < arr.length; i++){
        const item = arr[i];
    
        if (hash[item] === undefined){
            hash[item] = i;   //add it to that hash object as the key
        }else{
            return item;
        }
    }
    return undefined;
}
 
