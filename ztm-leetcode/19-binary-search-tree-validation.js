Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node key.
The right subtree of a node contains only nodes with keys greater than the node key.
Both the left and right subtrees must also be binary search trees.

step 1: verify the constraints
can there be duplicate values in the tree?
  yes, if you receive duplicate values, the tree is not a valid binary search tree

step 2: write out some test cases
Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

step 3: figure out a solution without code
//using Depth First Search
NLR - preorder
LNR - inorder
LRN - postorder

step 4: write out our solution in code
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

const tree = new TreeNode(15);
tree.insert([1,1,1,1,1,1,1,1,1,1,1,null,null,null]);

// ------- Code to generate our binary tree -------

// ------- Solution -------

const dfs = function(node, min, max) {
    if(node.val <= min || node.val >= max) {  //if node.val is less than min or more than max
      return false;   //return false
    }
    
    if(node.left) {   //if there is a left child
      if(!dfs(node.left, min, node.val)){   //update max to the node.value, any case it comes back as false, just return false
        return false;
      };
    }
    
    if(node.right) {   //if there is a right child
      if(!dfs(node.right, node.val, max)) {  //update min to the node.value, any case it comes back as false, just return false
        return false;
      }
    }
    
    return true;    //pass above validation
}

const isValidBST = function(root) {
    if(!root) return true;    //if it has no root, just return true
    return dfs(root, -Infinity, Infinity);  //pass in (node, min, max)
};

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
Time: O(n)
Space: O(n)

step 8: can we optimize our solution?
