//What is runtime complexity?
- Runtime Complexity - Describes the performance of an algorithm
How much more processing power/time is required to run your algorithm if we double the inputs

e.g. String Reverse
each additional character = 1 step through 1 loop
this would be "N", or "linear" runtime

e.g. nested for-loop
as n increased by one, we had to do way, way more stuff, or (n*n) things total
this would be n^2, or quadratic runtime

- Space complexity
How much more memory is required by doubling the problem set?

//Determining complexity
constant time 
  - 1 
  - no matter how many elements we are working with, the algorithm/operation/whatever will always take the same amount of time

logarithmic
  - log(n) 
  - you have this if doubling the number of elements you are iterating over does not double the amount of work, 
    always assume that searching operation are log(n)

linear time
  - n
  - iterating through all elements in a collection of data.
    if you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime.

quaslinear time
  - n * log(n)
  - you have this if doubling the number of elements you are iterating over does not double the amount of work,
    always assume that any sorting operation is n*log(n)

quadratic time
  - n ^ 2
  - every element in a collection has to be compared to every other element, the handshake problem
    
expponential time
  - 2 ^ n
  - if you add a "single" element to a collection, the processing power required doubles

//More on runtime complexity
Big O Notation
O(n) -> linear
O(1) -> constant
O(n^2) -> quadratic

//Identifying Runtime Complexity
iterating with a simple for loop through a single collection? => probably O(n)
iterating through half a collection? => still O(n). there are no constants in runtime
iterating through two different collections with separate for loops? => O(n+m)
two nested for loops iterating over the same collection? => O(n^2)
two nested for loops iterating over different collections? => O(n*m)
sorting? => O(n*log(n))
searching a sorted array? => O(log(n))
  
//memoization - speed up runtime complexity
store the arguments of each function is called again with the same arguments, 
  return the precomputed result, rather than running the function again.

an interview that an interviewer is going to ask you to write out some problem or solve something, 
  and then they are going to say to you, how can we improve the performance?
- very likely that they are referring to memorization.

slow fib function -> memoizer -> fast, memoized fib function

//Data Structures
- all about runtime complexity
Ways of organizing information with optimal "runtime complexity" for adding or removing records
JavaScript natively implements several data structures. You will still be asked about inferior data structures
   
  
