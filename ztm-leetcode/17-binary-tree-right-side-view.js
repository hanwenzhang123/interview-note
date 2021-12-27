//Breath First Search
1. identify the end of level
2. add last node to result
res = []
queue = []

//Binary tree right side view - BFS
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

const tree = new TreeNode(1);
tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const rightSideViewBFS = function(root) {  
  if(!root) return [];
  const result = [];
  let queue = [root];
    
  while(queue.length) {
    let length = queue.length, count = 0, currentNode;

    while(count < length) {
      currentNode = queue.shift();
      
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
      
      count++;
    }

    result.push(currentNode.value)
  }

  return result;
};

console.log(rightSideViewBFS(tree))


//Depth First Search
1. prioritize right side
2. keep track level of nodes

    1
  2   3
 4 5    6
    7
   8

preorder: NRL: [1,3,6,2,5,4,7,8]
inorder: RNL: [6,3,1,5,2,7,8,4]
postorder: RLN: [6,3,5,8,7,4,2,1]

step 1: verify the constraints
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

step 2: write out some test cases
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Input: root = [1,null,3]
Output: [1,3]

Input: root = []
Output: []

step 3: figure out a solution without code

step 4: write out our solution in code
//Binary tree right side view - DFS
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

const tree = new TreeNode(1);
tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const dfs = (node, currentLevel, result) => {
  if(!node) return;   //edge case, when root node is not available, just return
  if(currentLevel >= result.length) { //when level increase but not yet the result length
    result.push(node.value);    //pushing the value in
  }

  if(node.right) {   //node starts as the root, and we go deep to its right nodes first
    dfs(node.right, currentLevel + 1, result);  //when the node has the right node, goes to right, currentlevel plus 1 (one level down)
  }
  
  if(node.left) {   //when the node has the left node but not the right node
    dfs(node.left, currentLevel + 1, result);   //goes to left, currentlevel plus 1 (one level down)
  }
}

const rightSideViewDFS = function(root) {
  const result = [];    //the result array
  
  dfs(root, 0, result);
  return result;
};

console.log(rightSideViewDFS(tree))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
Time: O(n)
Space:  O(n) 
  worst case - O(w) - w means the width 

step 8: can we optimize our solution?
   
