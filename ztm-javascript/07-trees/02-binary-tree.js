//Binary Tree
Each node can have either 0, 1 or 2 nodes, and each child can only have one parent
Each node represents a certian state

//Perfect Binary Tree - efficient, double the node
A perfect binary tree has everything filled in that means all the leaf nodes are full and there is no that only has one child.
A node either has zero children or two children. And also the bottom layer of the tree is completely filled. Nothing is missing .

//Full Binary Tree
A full binary tree, which simply says that a node has either a zero or two children, but never one child.

function BinaryTreeNode(value){
 this.value = value;
 this.left = null;
 this.right = null;
}
  
//Big O
Binary Search Tree
lookup - O(log N)
insert - O(log N)
delete - O(log N)
