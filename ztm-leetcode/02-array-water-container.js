//Question #2 Container with Most Water (Medium)
Question:
You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
Find two lines which together with x-axis forms a container that would hold the "greatest" amount of water.
Return the area of water it would hold. 

[1, 8, 6, 2, 9, 4]
area = length * width

step 1: verify the constraints
does the thickness of the lines affect the area? no, assume they take up no space
do the left and right sides of the graph count as walls? no, the sides can not be used to form a container
does a higher line inside our container affect our area? no, lines inside a container do not effect the area

step2: write out some test cases
//best test case
[7, 1, 2, 3, 9] 7*4 = 28
[] = 0
[7] = 0
[6, 9, 3, 4, 5, 8] 8*4 = 32

step3: figure out a solution without code
area = length * width
min(a, b) * (b[i] - a[i])
//using 2 pointers, a and b, b is the outer most max value
[7, 1, 2, 3, 9]
maxArea = 0;    //initialize max area with 0
min (7, 1) * (1 - 0) = 1 * 1 = 1  //maxArea = 1; 
min (7, 2) * (2 - 0) = 2 * 2 = 4  //set maxArea = 4 since 4 > than 1
min (7, 3) * (3 - 0) = 3 * 3 = 9  //set maxArea = 9 since 9 > than 4
min (7, 9) * (4 - 0) = 7 * 4 = 28  //set maxArea = 28 since 28 > than 9
//move a to the index 1
min (1, 2) * (2 - 1) = 1 * 1 = 1 
min (1, 3) * (3 - 1) = 1 * 2 = 2 
min (1, 9) * (4 - 1) = 1 * 3 = 3 
//move a to the index 2
min (2, 3) * (3 - 2) = 2 * 1 = 2 
min (2, 9) * (4 - 2) = 2 * 2 = 4 
//move a to the index 3
min (3, 9) * (4 - 3) = 3 * 1 = 3 

step 4: write out our solution in code
//brute force solution
const getMaxWaterContainer = function(heights) {
  let maxArea = 0;  //the value changes throughout the loops
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1+1 ; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      //compare existing max area against newly calculated area
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

time: O(n^2);  //due to nested loops, time goes up when the array is larger
space: O(1);   //we do not store anything so we do not occupy much space

thinking about our optimal solution
//new technique : shifting pointer
initial the pointer at the two opposite sides of the array
first, we want (b[i] - a[i]) larger the better because it impacts our value, so we start on the end

outcome of the area is impacted by the lesser of the two values of A and B - min(a, b)
(2 pointers, minimum value affects the area, we could see by movinng minimum value)
shrinking the distance between A and B, We somehow end up with a larger area

 0  1  2  3  4  5
[4, 8, 1, 2, 3, 9]
area = min(a, b) * (b[i] - a[i])   //we only cares about the smaller value in min(a, b)

when a is 4, b is 9
area = min (4, 9) * (5 - 0) = 4 * 5 = 20

when a moves to 8, b is 9
area = min (8, 9) * (5 - 1) = 8 * 4 = 32  //answer

when a moves to 1, b is 9
area = min (1, 9) * (5 - 2) = 9 * 3 = 27

when a moves to 2, b is 9
area = min (2, 9) * (5 - 3) = 2 * 2 = 4

when a moves to 3, b is 9
area = min (3, 9) * (5 - 4) = 3 * 1 = 3

//above example shows that we only touch each element once, we only move one of the pointer which is the min value
time: O(n)

//Optimal Solution
const heightsArray = [4,8,1,2,3,9];

const getMaxWaterContainer = function(heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;   //initialize pointers at the opposite position, and maxArea which changes later

  while(p1 < p2) {    //pointer a is smaller than pointer b, which no overlapping
    const height = Math.min(heights[p1], heights[p2]);  //check which one smaller, take the smaller value as the height
    const width = p2 - p1;        //the index between the two pointers
    const area = height * width;    //calculate the area based on the current height and width
    maxArea = Math.max(maxArea, area);    //update between the current maxArea and newly generated area
    
    if(heights[p1] <= heights[p2]) {    //see which value is greater
      p1++;       //if p1 is smaller, then p1 (the left one) moves to the right
    } else {
      p2--;       //if p2 is smaller, then p2 (the right one) moves to the left
    }
  }
  return maxArea;   //return the value
}

console.log(getMaxWaterContainer(heightsArray));

time: O(n)    //because we at most scan over the entire array looking at each element once
space: O(1)   //static variable, not grow any larger
