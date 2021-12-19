function mergeSortedArrays(array1, array2) {
  const mergedArray = [];   //initially empty then push the sorted item into the array
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //Check input 
  if (array1.length === 0) {  //if the first array is empty, just return the second array
    return array2;
  }
  if (array2.length === 0) {  //if the second array is empty, just return the first array
    return array1;
  }
  
  //Using the while loop - loop while the condition is met
  while (array1Item || array2Item) {   //while there is an array1Item or an array2Item, either one is populated
    //console.log(array1Item, array2Item) // comparing 2 items throughout the loops
    if(!array2Item || array1Item < array2Item) {  //if the item in array1 is less than array2, or array2 is not exist in order to pass "undefined" as a true statement
      mergedArray.push(array1Item)
      array1Item = array1[i]  //move to the next array item in the list
      i++;   //increment
    } else {    // the item in array2 is less than array1
      mergedArray.push(array2Item);   //add the second item
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
//[0, 3, 4, 4, 6, 30, 31]
 
