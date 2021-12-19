//Recursion Introduction
Recursion is a concept which used a lot in Algorithms, a popular topic in interviews too

Recursion is when you define something in terms of itself
simply, it is a function that refers to itself inside of the function.

Recursion is really good for tasks that have repeated subtasks to do.
used in searching and sorting algorithms

Example:
ls -R: means recursively - check files inside the folder
function inception() {
  inception();    //the function calls itself
}

//Stack Overflow
- maximum call stack sizwe exceeded
- keep running until we run out of memory 


//Anatomy of Recursion
let counter = 0;
function inception(){
 if(counter > 3) {
   return "done!"
   counter++
   //inception();   //return undefined
   return inception();  //"done" -> without the return keyword, we do not return the value "done" but undefined from the function
}
inception()
  
  
//Recursion Rules
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed, usually you have to 2 returns (the base case and recursive case)
  

//Recursion vs Iterative
Anything you do with a recursion CAN be done iteratively (loop)
  
//Recruision Pros and Cons
Pro - DRY, Readability
Con - Large Stack


//When to use Recursion
- BFS + DFS (Searching)
- Sorting

New Rule:
Every time you are using a tree or converting something into a tree, consider recursion

1. divided into a number of subproblems that are smaller instances of the same problem.
2. each instance of the subproblem is identical in nature.
3. the solutions of each subproblem can be combined to solve the problem at hand

Divide and Conquer using Recursion (tree data structure)
  - like looking through a phone book, you split the phone book by sections until you get closer
  - when you do not know how deep the data structure is, you can use recursion
 
Recurision
- Merge Sort
- Quick Sort
- Tree Traversal
- Graph Traversal
  
