Given the root of a binary tree, return its maximum depth.
A binary trees maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Breadth First Search
-pre-order traversal
Depth First Search
-in-order traversal
-post-order traversal

step 1: verify the constraints
what do we do if the tree is empty?
  just return 0

step 2: write out some test cases
Input: root = [3,9,20,null,null,15,7]
Output: 3
Input: root = [1,null,2]
Output: 2

step 3: figure out a solution without code
function recursive(node, count){
  if(node == null) return count;
  count++;
  return Math.max(recursive(node.left, count), recursive(node.right, count))
}

step 4: write out our solution in code
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode();
root.insert([1,1,1,1,null,null,null,1,null,null,null,1,null,null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------
var maxDepth = function(node, currentDepth) {
    if (!node) {
      return currentDepth;
    }
    
    currentDepth++;
    
    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth)); //return the larger number for how depth the tree is
};

console.log(maxDepth(root, 0));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
 
