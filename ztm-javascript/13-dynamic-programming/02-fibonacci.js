//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;

//recursion
function fibonacci(n) { //O(2^n)
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

//memorized dynamic programming - top-down
//we increase space complexity but save time: O(n) 
function fibonacciMaster() { //O(n) 
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];    //if in cache, return cache
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];    //using recursion so return, add the result to cache
      }
    }
  }
}

//avoid recursion - bottom-up
function fibonacciMaster2(n) {
  let answer = [0,1];   //pre-fill with 0 and 1
  for ( let i = 2; i <= n; i++) {   //start from 2nd index
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();    //gives up the very last item in the list
}

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(35))
console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMaster2(100));
console.log('we did ' + calculations + ' calculations');
   
