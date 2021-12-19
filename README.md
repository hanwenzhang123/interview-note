---
title: Data Structures and Algorithms
---
## Table of Contents
- [Big O](#Big-O)
- [Data Structures](#Data-Structures)
- [Algorithms](#Algorithms)
- [Techical Interview](#Techical-Interview)

## Big O
https://www.bigocheatsheet.com/
![Big O](/BIG-O.png)

### Good Code
1. Readable
2. Scalable
- Memory - Space Complexity
- Speed - Time Complexity

### Data Structures + Algorithms = Programs
Data Structures - A collection of values\
Algorithms - Steps and processes we put in place to manipulate this collection of values that allows us to write programs

### Big O Rules
1. Worst Case
2. Remove Constants
3. Different Terms for Inputs
4. Drop Non-Dominants

Polynomial time and space complexity
- O(LogN) - Logarithmic
- O(N) - Linear
- O(NlogN) - Linearithmic
- O(N^2) - Quadratic
- O(N^3) - Cubic

Exponential time and space complexity
- O(2^N) - Exponential
- O(!N) - Factorial
- O(N^N) - Exponential

### Data Structures Examples
* Arrays
* Stacks
* Queues
* LinkedLists
* Trees
* Tries
* Graphs
* Hash Tables

### Algorithms Examples
* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

[[↑] Back to top](#table-of-contents)

## Data Structures
### Arrays
- search - O(n)
- lookup  O(1) - fast
- push - O(1) or O(n) if use flexible key
- insert  O(n) - linear time
- delete  O(n)

Pros & Cons
- Pros: fast lookups, fast push/pop, ordered
- Cons: slow inserts, slow deletes, fixed size (if using static array)

### Hash Tables
- search - O(1)
- insert - O(1)
- lookup - O(1) or O(n) if collision
- delete - O(1)

Pros & Cons
- Pros: fast lookups (good collision resolution needed), fast inserts, flexible keys
- Cons: unordered, slow key iteration

### Linked List
- prepend - O(1)  //add at the beginning
- append - O(1)   //add at the end
- lookup - O(n)   //traversal, from the head to what we look for
- insert - O(n)   //go one by one, find the index and insert there
- delete - O(n)   //we have to find the item

Pros & Cons
- Pros: fast insertion, fast deletion, ordered, flexible size
- Cons: slow lookup, more memory

### Stacks and Queues
Stacks （LIFO)
- lookup - O(n) //you do not want to traverse the whole stack
- pop - O(1)  //remove the last item on the list
- push - O(1) //add item to the last on the list
- peek - O(1) //view the top of the last plate

Queues (FIFO)
- lookup - O(n) //you do not want to traverse the whole stack, lookup usually do not do
- enqueue - O(1)  //push, add the person to the line, add to the last
- dequeue - O(1) //shift, remove person from the line, take the first
- peek - O(1) //view the top of the last plate

Pros & Cons
- Pros: fast operations, fast peek, ordered
- Cons: slow lookup

### Trees
Balanced BST
- lookup - O(log N)
- insert - O(log N)
- delete - O(log N)

Binary Tree
- lookup - O(n)
- insert - O(log N)
- delete - O(log N)
 
### Graphs
- Pros: Relationship
- Cons: Scaling is hard

[[↑] Back to top](#table-of-contents)

## Algorithms

### Recursion
- Pros: DRY, Readability
- Cons: Large Stack

### Bubble Sort (bubble up highest)
- Time - O(n^2)
- Space - O(1)

### Selection Sort (smallest places first)
- Time - O(n^2)
- Space - O(1)

### insertion Sort (insert to right location)
- Time - O(n) - small dataset or nearly sorted
- Time - O(n^2) - worst case
- Space - O(1)

### Merge Sort (most often used, divide & conquer)
- Time - O(n log n)
- Space - O(n log n)

### Quick Sort (most often used, divide & conquer)
- Time - O(n^2) - worst the case you pick the bad pivot
- Time - O(n log n) - usually the fastest sorting algorithm in average
- Space - O(log n) - better than merge sort

### Breadth First Search (node at the upper level)
- Pros: shortest path, closer nodes
- Cons: more memory than DFS

### Depth First Search (node at the lower level)
- Pros: less memory, determine whether a path exists
- Cons: can get slow (especially if the tree or grapth is very deep)

[[↑] Back to top](#table-of-contents)

## Techical Interview
### 3 Keys to Technical Interviews
- Technical Knowledge
- Critical & Abstract Problem Solving
- Communication

### Steps
1. step 1: verify the constraints
2. step 2: write out some test cases
3. step 3: figure out a solution without code
4. step 4: write out our solution in code
5. step 5: double check for errors
6. step 6: test our code with our test cases
7. step 7: space & time complexity
8. step 8: can we optimize our solution?

[[↑] Back to top](#table-of-contents)
