// A tree can also be full and complete
Full Tree
- either 2 children or no children
Complete tree
- every level will be full with 2 children except for the last one

//Count Complete Tree Nodes
Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, 
  and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

step 1: verify the constraints
step 2: write out some test cases
Input: root = [1,2,3,4,5,6]
Output: 6

Input: root = []
Output: 0

Input: root = [1]
Output: 1

step 3: figure out a solution without code
//step we take will be the level of the tree

step 4: write out our solution in code
// ------- Code to generate our binary tree -------

// ------- Our Solution -------

const getTreeHeight = function(root) {  //receive the root node
  let height = 0;   //first initialize the height
  while(root.left !== null) {
    height++;   //increasing the height while the root has a left element
    root = root.left;
  }
  
  return height;    //return the level of the tree, if only one level, just return 0
}

const nodeExists = function(idxToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1, count = 0;   //right - index from 0 so minus 1
  
  while(count < height) {   //while loop until count is equal to the height
    const midOfNode = Math.ceil((left + right) / 2);  //get the middle of the node, check which side, left or right
    
    if(idxToFind >= midOfNode) {  //node fall on right side
      node = node.right;    //take node to the right side 
      left = midOfNode;   //shift the left to the middle
    } else {    //node fall on left side
      node = node.left;   //let node traverse to the left node
      right = midOfNode - 1;    //shift the right to the middle-1
    }
    
    count++;    //increment the count
  }
  
  return node !== null;
}

const countNodes = function(root) {
  if(!root) return 0;
  
  const height = getTreeHeight(root);   //get how many level is the tree
  
  if(height === 0) return 1;  //if the tree has only root node, then only one node
  
  const upperCount = Math.pow(2, height) - 1    //level of the tree to the power of 2 minus 1 (the single root node)
  
  let left = 0, right = upperCount;
  
  while(left < right) { //while left less than right until left and right equals
    const idxToFind = Math.ceil((left + right) / 2);  //Math.ceil will round up
    
    if(nodeExists(idxToFind, height, root)) {   //if the node exist
      left = idxToFind;
    } else {
      right = idxToFind - 1;    //reducing search space
    }
  }
  
  return upperCount + left + 1;   //level of the tree plus last level nodes plus 1 (index from 0 so plus 1 to count the actual total)
};

console.log(countNodes(tree))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
Time: O(h^2) - (log^2 N) - (log^n * log^n)
Space: O(1)

step 8: can we optimize our solution?
   
