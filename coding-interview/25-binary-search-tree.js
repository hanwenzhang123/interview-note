//What is a Binary Search Tree?
            value/data/key
              left  right
value > left.value  value < right.value

binary tree - normal tree that just has two nodes underneath each parent, every node in here has at most two children.
binary search tree - the values on the left are less than the parent value and that the values on the right are greater than the parent value.

//Binary Search Implementation
const binarySearch = function(array, target){
  let left = 0, right = array.length - 1;
  while(left <= right){
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if(foundValue === target){
      return mid;
    } else if(foundValue < target){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

//Binary Search Tree - Implementation

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {    //using recrusion, compare the incoming data value, either pass left or right
    if (data < this.data && this.left) {  //if there is already left side node assigned
      this.left.insert(data);   //recurse through left side
    } else if (data < this.data) {    //no left side node assigned yet
      this.left = new Node(data);   //create a new node if there is no nodes, assign to this.left
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {    //like a search method, using recursion through the tree
    if (this.data === data) {   /found the data value
      return this;
    }

    if (this.data < data && this.right) {   //make sure there is a right side node
      return this.right.contains(data);  //repeat through right side
    } else if (this.data > data && this.left) {   //make sure there is a left side node 
      return this.left.contains(data);  //repeat through left side
    }

    return null;    //if all above failed, can not find the data value
  }
}

module.exports = Node;
