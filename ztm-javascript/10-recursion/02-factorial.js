// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

//Recursive - O(n)
function findFactorialRecursive(number) {
  if(number <= 2) {   //stop the recursive until the number hits 2
    return 2;
  }
  return number * findFactorialRecursive(number - 1)  
}

findFactorialRecursive(5);
//If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2


//Iterative - O(n)
function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {   //i = 2 avoids extra loop; i <= number includes the number itself
    answer = answer * i;
  }
  return answer;
}

findFactorialIterative(5);


//Factorial
5! = 5 * 4 * 3 * 2 * 1
Recursion - Stop
          \ Recursion - Stop
                      \ Recursion - Stop
                                  \ Recursion
  
