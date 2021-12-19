//Comparison Sort
//Elementary Sorting
- Bubble Sort
Time - O(n^2)
Space - O(1)

- Selection Sort
Time - O(n^2)
Space - O(1)

- Insertion Sort
Time - O(n) - small dataset or nearly sorted
Time - O(n^2)
Space - O(1)

//Comparison Sort
//Divide & Conquer
- Merge Sort
Time - O(n log n)
Space - O(n log n)

- Quick Sort
Time - O(n^2) - worst the case you pick the bad pivot
Time - O(n log n) - usually the fastest sorting algorithm in average
Space - O(log n) - better than merge sort

//Non-Comparison Sort - only work with integer with restrict range
- Counting Sort
- Radix Sort


What is all the fuss with sorting? - large data set
The issue with sort() - convert to string and compare the 1st letter

//Arrary.sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort(); 
console.log(array1); // [1, 100000, 21, 30, 4]

let numbers = ['80', '9', '700', 40, 1, 5, 200];
numbers.join(); // '80,9,700,40,1,5,200'
numbers.sort((a, b) => a - b);    //compare numbers
console.log(numbers); // [1, 5, 9, 40, 80, 200, 700]


//Sorting Algorithms
https://www.toptal.com/developers/sorting-algorithms

Sorting - O(N log N)
You do not write the sorting yourself, using framework instead
 but you need to know what works behind the scene, when to use what
  
 
//Dancing Algorithms
https://www.youtube.com/user/AlgoRythmics/videos
 
