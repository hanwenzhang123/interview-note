//Validating a Binary Search Tree

// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {   //set up two arguments, min and max, carry down, using recursion to check validation
  if (max !== null && node.data > max) {  //current max already set but current node is out of the max value
    return false;
  }

  if (min !== null && node.data < min) {  //current min already set but current node is out of the min value
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {  //there is left value, but calling validation returns false
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {  //there is right value, but calling validation returns false
    return false;
  }

  return true;    //pass validation check, return true
}

module.exports = validate;


//node.js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

module.exports = Node;
 
