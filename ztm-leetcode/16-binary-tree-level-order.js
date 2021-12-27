step 1: verify the constraints
//Questiom: Given the root of a binary tree, return the level order traversal of its nodes values. (i.e., from left to right, level by level).

step 2: write out some test cases
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []

step 3: figure out a solution without code
1.identify level of tree
2.initialize our array
3.push array into res

BFS = function(root){
  res=[], q=[root];
  while(q.length){
    node=q.shift();
    res.push(node.val);
    if(node.left) q.push(node.left)
    if(node.right) q.push(node.right)
  }
  return res;
}

step 4: write out our solution in code
//Time: O(n)
//Space: O(n)
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

const tree = new TreeNode(3);
tree.insert([6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder = function(root) {
  if(!root) return [];  //edge cases
  const result = [];    //will return this result
  const queue = [root];
  
  while(queue.length) {   //as long as we have something in the queue
    const currentLevelValues = [];  //summary for current level
    let length = queue.length, count = 0;

    while(count < length) { //as long as not run to the end yet
      const currentNode = queue.shift();  //get the current node, 1st value in queue
      
      currentLevelValues.push(currentNode.value); //insert value to currentLevelValues
      
      if(currentNode.left) {  //if there is a value under currentNode, push the left values to queue
        queue.push(currentNode.left)
      }
      
      if(currentNode.right) {  //if there is a value under currentNode, push the right values to queue
        queue.push(currentNode.right)
      }

      count++;  //increment count
    }
    
    result.push(currentLevelValues);  //push the current level values to the result
  }
  
  return result;
};

console.log(levelOrder(tree))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
   
