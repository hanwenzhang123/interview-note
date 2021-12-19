// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Create empty array to hold chunks called chunked
// for each element in the unchunked array
// retrieve the last element in chunked
// if last element does not exist, or if its length is equal to chunk size
// push a new chunk into chunked with the current element
// else add the current element into the chunk

//Solution 1
function chunk(array, size) {
  const chunked = []; //the new array holds all the chunks of data
  console.log(chunked)

  for (let element of array) {    //iterate through each element in the original array 
    const last = chunked[chunked.length - 1]; //get the last element of the chunked array
    console.log(last)

    if (!last || last.length === size) {  //if the last element does not exist, or it equals to the size
      chunked.push([element]);    //push a new chunk in the chunked
    } else {
      last.push(element); //otherwise, push to the current array
    }
  }

  return chunked;   //return chunked array at the bottom
}

// .slice()
const letters = ["a", "b", "c", "d", "e"]
letters.slice(1, 3) //["b", "c"]

// create empty chunked array
// create index starts at 0
// while index is less than array.length
// push a slice of length size from array into chunked
// add size to index

//Solution 2 - using slice
function chunk(array, size) {
  const chunked = [];
  let index = 0;  //index will be changing over time

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;    //changing the index by size
  }

  return chunked;   //return chunked
}

module.exports = chunk;

