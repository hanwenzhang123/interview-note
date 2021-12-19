When a program executes, it has two ways to remember things, the heap and the stack
heap - where we store variables that we assign values to
stack - where we keep track of our function calls

Sometimes we want to optimize for using less memory instead of using less time.
time cost - look at the total size relative to the size of the input and see how many new variables or new memory we are allocating
          - how much memory is being used

what causes space complexity?
variables
data structures (arrays, objects, hash tables)
function calls
allocations


//exercise
//O(1)
function booooo(n) {
 for (let i = 0; i < n.length; i++) { //here we only using i = 0 with no other controls, not adding any other memories
   console.log('booooo!')
 }
}

booooo([1, 2, 3, 4, 5])  //O(1) - space complexity
//When we talk about space complexity, we talk about additional space, we do not include space taken up by the input
//we do not care how big the input is, we do not have a control over the sort of input in receives
// we only have control of what happens inside of this function


//O(n)
function arrayOfHiNTimes(n){
  let hiArray = [];
  for (let i = 0; i < n; i++){ //we ignore the constant time i = 0
    hiArray[i] = 'hi';  //we create a data structure and adding item, each item is an additional memory space on computer and times
  } 
  return hiArray;
}

arrayOfHiNTimes(6)  //new array with 6 items saying 'hi' which takes space
//O(n) - space complexity
  
