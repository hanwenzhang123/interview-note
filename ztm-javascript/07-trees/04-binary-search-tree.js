It is very good for searching, for comparing things. 
this data structure preserves relationships

rules
1. all child nodes in the tree to the right of the root node must be greater than the current node.
2. node can only have up to two children because it is a binary tree.

Advantage
- searching - comparing between 2 items, no needs to iterate in a linear fashion
- insert - always traverse to figure out where we should place the item
- delete - we find the item, remove it, and have the next go up. like remove 50, then 51 go up
  
in order for us to insert or delete something in a binary search tree, 
  we need to figure out where to insert the item or where the item is before we delete it.

//balanced vs unbalanced BST
balanced  //good, AVL tree and Red black tree
lookup - O(log N)
insert - O(log N)
delete - O(log N)

unbalanced  //it is bad, it had to loop through every single node and lookup and search which becomes O(n) linear time 
lookup - O(n)
insert - O(n)
delete - O(n)

//BST pros and cons
Pros
- better than O(n)
- ordered
- flexible size

Cons
No O(1) operation (we usually have to do traversal through the tree for any sort of operation)

//BST vs Array
A look up will be faster in Array because we have all logged in for searches vs if we iterate through an entire array
if the array is unsorted, inserts and deletes are also faster than their array unless the array is adding to the end
Otherwise, arrays have to shift all the indexes versus a binary search tree that is just of log in.

//BST vs Hash Table
although hash tables allow us to insert and search at constant time.
with binary search trees, we have sorted data and we also have this structure of parent child relationship that you would not be able to get too much with hash tables.

A good thing to keep in mind is that binary search trees are not the fastest for anything.
Remember, their operations are usually always O(log n) 
on average, an array or an object will have faster operation, but there are certain conditions where they do outperform objects and race.
So binary search trees do perform really well as long as you make sure that we stay away from edge cases and we balance our binary search tree.
    
//AVL tree and Red Black Tree
automatically rebalance itself so we do not have those edge cases where our balanced tree turn into a linear unbalanced tree
AVL tree - reverse back to the unbalanced part and make sure the level always balanced
https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
Red Black Tree - nodes are red and black to make sure they are balanced automatically
https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
Compare both: https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree

  
