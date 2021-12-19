//Dynamic Programming
Do you have something you can cahce? Dynamic Programming

Dynamic Programming is an optimization technique to solve problems by breaking it down into a collection of problems,
solving each of those problems just once and storing their solutions in case next time the same problem occurs.


//Memorization
Caching is a way to store values so you can use them later on.
Memorization is a specific form of caching that involves caching the return value.


//Dynamic Programming
1. can be divided into subproblem
2. recursive solution
3. are there repetitive subproblems?
4. memoize subproblems
5. demand a raise from your boss
  

//regular function
function addTo80(n) {
  return n + 80;
}

addTo80(5)

//learn to cache
let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {   //cache.n
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))


// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6))
 
