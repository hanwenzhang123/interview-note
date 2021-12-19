// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];  //will iterate through with first node, and stopper variable "s" (end of line)
  const counters = [0];   //will return counter, like the widths, starting element 0

  while (arr.length > 1) {  //bigger than 1 because we would always have "s" element in arr Array
    const node = arr.shift();   //take out the first node
  
    if (node === 's') { //a value that we can recognize as symbol when we hit the end of the row
      counters.push(0);   //create a new entry to the counter array as 0 for now
      arr.push('s');    //push "s" back to arr
    } else {  //an actual node that contains the data
      arr.push(...node.children);  //add the children nodes to the end of the array
      counters[counters.length - 1]++;    //incrementing the counter number
    }
  }

  return counters;
}

module.exports = levelWidth;


//node.js - individual node that we are working with
module.exports = class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
};
