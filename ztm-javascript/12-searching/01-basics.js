- Linear Search
- Binary Search
- Breadth First Search
- Depth First Search

//Linear Search - one-by-one
linear search or sequential search is a method of finding a target value within a list, like loop through arrays to find items
It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.

Time:
- Best: O(1)
- Worst: O(n)

Example:
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){  //return index
  return item === 'Godzilla';
});

beasts.find(function(item){   //return actual item of Godzilla
  return item === 'Godzilla';
})

beasts.includes('Godzilla') //return boolean


//Binary Search 
- If the list is sorted
- Then we split half and start from the middle to see left or right


//Graph + Tree Traversals - O(n)
traversal and search can be changed interchangeably
we visit every single node - O(n)


//BFS Introduction
Breadth First Search/Traversal
- keep going from left to right level by level until you find the node you are looking for or the end is reached.
//     9
//  4     20
//1  6  15  170
[9, 4, 20, 1, 6, 15, 170]
  

//DFS Introduction
Depth First Search/Traversal - lower memory required
- one branch of the tree down as many levels as possible until the target notice found or the end is reached
- usually start from left side then go depth then come back up
//     9
//  4     20
//1  6  15  170
Inorder - [1, 4, 6, 9, 15, 20, 170]
Preorder - [9, 4, 1, 6, 20, 15, 170] - useful to create the tree
Postorder - [1, 6, 4, 15, 170, 20, 9]


//BFS vs DFS
All traversal - O(n)
Ideal - walk through the tree without repeating self

BFS
- Pros: shortest path, closer nodes
- Cons: more memory than DFS
If you have information on the location of the target node and you know that the node is likely in the upper level of a tree,
  then breadth of research is better because it will search through the closest nodes first.

DFS
- Pros: less memory, ask does path exist?
- Cons: can get slow (especially if the tree or grapth is deep)
If you know that the node is likely at the lower level of a tree, perhaps death research is better in that case.


//Traversal Exercise
//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )

//If the tree is very wide:
DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
DFS

//determining whether a path exists between two nodes
DFS

//Finding the shortest path
BFS


//Graph Traversal
BFS - Shortest Path
- What is the closest to our note.
- What are the most related items on Amazon?
- Who are our closest friends on Facebook or closest connections on LinkedIn 

DFS - Does path exist? Check to see if it exists
- like maze pussle, go deepest and try other path
- use less meemory than BFS

//Dijkstra + Bellman-Ford Algorithms
- to figure out the shortest path between two nodes
 
