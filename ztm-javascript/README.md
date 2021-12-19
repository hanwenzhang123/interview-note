# Data Structures and Algorithms
## Big O Rules
1. Worst Case
2. Remove Constants
3. Different Terms for Inputs
4. Drop Non-Dominants

## Data Structures
#### Arrays
- search - O(n)
- lookup  O(1) - fast
- push - O(1) or O(n) if use flexible key
- insert  O(n) - linear time
- delete  O(n)

Pros
- fast lookups
- fast push/pop
- ordered

Cons
- slow inserts
- slow deletes
- fixed size (if using static array)

#### Hash Tables
- search - O(1)
- insert - O(1)
- lookup - O(1) or O(n) if collision
- delete - O(1)

Pros
- fast lookups  - good collision resolution needed
- fast inserts
- flexible keys

Cons
- unordered
- slow key iteration

#### Linked List
- prepend - O(1)  //add at the beginning
- append - O(1)   //add at the end
- lookup - O(n)   //traversal, from the head to what we look for
- insert - O(n)   //go one by one, find the index and insert there
- delete - O(n)   //we have to find the item

Pros
- fast insertion
- fast deletion
- ordered
- flexible size

Cons
- slow lookup
- more memory

#### Stacks and Queues
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

Pros
- fast operations
- fast peek
- ordered

Cons
- slow lookup

#### Trees
Balanced BST
- lookup - O(log N)
- insert - O(log N)
- delete - O(log N)

Binary Tree
- lookup - O(n)
- insert - O(log N)
- delete - O(log N)
 
#### Graphs
Pros
- Relationship

Cons
- Scaling is hard


## Algorithms
