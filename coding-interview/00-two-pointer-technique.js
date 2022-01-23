// This gist is for my YouTube video which I tried to explain Window Sliding Technique.
// You can watch it from here: https://youtu.be/guDU5HnLqAs

// Given a sorted array A (sorted in ascending order), having N integers,
// find if there exists any pair of elements (A[i], A[j]) such that
// their sum is equal to X.
//
// Input: A = [2,3,4,5,6,7,8,9], k= 10
// Output: true
// NOTE: We slightly changed the question and the output in the video. We're returning pair indexes as an array.

//Two Pointer Technique
const arr = [2, 3, 4, 5, 6, 7, 8, 9];
//           ^                    ^
const k = 11;

function findPairs(array, k) {
  let start = 0;
  let end = array.length - 1;
  let occurances = [];

  while (start < end) {
    if (array[start] + array[end] === k) {
      occurances.push([start, end]);
      start++;
      end--;
    } else if (array[start] + array[end] < k) {
      start++;
    } else {
      end--;
    }
  }
  return occurances;
}

console.log(findPairs(arr, k));

//Brute Force
 // Naive solution to find if there is a pair in A[0..N-1] with given sum.
function isPairSum(A, N, X){
        for (var i = 0; i < N-1; i++){
            for (var j = i+1; j < N; j++){
                if (i == j) continue;
                if (A[i] + A[j] == X) return 1;
                if (A[i] + A[j] > X) break;
            }
        }
        return 0;
}    
var arr=[ 2, 3, 5, 8, 9, 10, 11 ];
var val = 17; // value to search
var arrSize = 7;  // size of the array
document.write(isPairSum(arr, arrSize, val)); // Function call
 
