//Binary Heap 
- max heap - every node on the top level has a greater value than every node on the next level down
- a heap can be used in any algorithm where ordering is important, great at doing comparative operations
- Heaps are used a lot in data storage, priority queues, sorting algorithms.
- min heap is the opposite to the max heap

//Comparation
Array - we have random access, it allows us to randomly access any element within them using an index
Hash table - random access
LinkedList - we can change things dynamically unlike an array, but finding something within them is O(n) linear time as we had to go through the list
Heap - we have to do sort of traversal in trees

//Big O
lookup O(n)   //less ordered than a binary search tree, here we have to check every single node like searching through a linked list or iterating through an array
insert O(log N) // worst case 
        O(1) // best case      
delete O(log N)

//heap in memory vs heap in data structure
Different from the JS heap which is the free storage that is a region in our memory where we can store arbitary data
no real relationship with the data structure that is named heap

//Binary Heap Recap
- only guarantee - the parent is always greater than the children.
- no order from left to right, left and right can be any value as long as it is less than the top value.
- they take up the least amount of space possible because it is always left to right insertion
- no concept of the unbalanced heap, we do not have to rebalance it like a binary search tree 
- because they do left to right insertion, they preserve the order of the insertion
- you can even use arrays for insertion instead of node

//Benefits
- memory efficient
- compact //because it is always a complete binary tree,
binary heaps are really useful for things such as priority queue.

//Priority Queue
//https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
It is a type of data where each element has a priority. 
(different from the regular queue, first in first out)
And elements with a higher priority are served before elements with lower priorities
- a club with a VIP line
- lining up for the airplane, captain first then first class then passanges
- emergency room, treating patients with the most severe symptoms

//Pros and Cons
Pros
- better than O(m)
- priority
- flexible size
- fasy inset

Cons
- slow look up  //find max and min is great
   
