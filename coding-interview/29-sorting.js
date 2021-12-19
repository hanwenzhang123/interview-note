Name         WorstCase    Difficulty
BubbleSort      n^2       easiest
SelectionSort   n^2       easiest
MergeSort      n*log(n)   medium

//BubbleSort
from i= 0 to < array.length
from j = 0 to (array.length - i)
if the element at j is greater than j+1
swap elements at j and j+1

//SelectionSort
from i = 0 to < array.length
assume the element at 'i' is the least in the array, assign i to 'indexOfMin'
for j from i + 1 to end of array
see if there is an element with lower value
if there is, record its index
if the index of the current element and the index of the lowest element is not the same, swap them

//MergeSort
create "result" array
while there are still element the left half is less than first in right half
"shift" the element from left into a "result" array
else
"shift" the wlement from right into a "result" arr
take everything form the array that still has stuff in it and put it in result

// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
