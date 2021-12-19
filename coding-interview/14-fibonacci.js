//Runtime Complexity in Practice - Fibonacci

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution #1 - linear runtime (for-loop)(for every increase in n, we have to calculate one additional number) 
function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n]; //result[result.length - 1] => access to last record
}

//Solution #2 - Recursion
function fib(n) {
  if (n < 2) {
    return 2
  }
  
  return fib(n-1) + fib(n-2)
}

//slow fib function -> memoizer -> fast, memoized fib function
//Solution #3 - memoization
function memoize(fn) {    //pass a function
  const cache = {};   //object that store the previous function calls with results
  return function(...args) {    //return a new function (the fast one)
    console.log(cache)
    if (cache[args]) {  //if exist, then return the result in the cache
      return cache[args]; 
    }

    const result = fn.apply(this, args);  //call the original slowfib function and store to result
    cache[args] = result;   //store the result to cache

    return result;    //return the result
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib); //will pass slow one and return a new function to fib()

module.exports = fib;
  
