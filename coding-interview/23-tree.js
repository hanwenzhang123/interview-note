Tree Traversal
- iterating through a tree = traversal
- there are different orders of traversal

Breadth-First Traversal
- from top, then go level by level, left to right, all the way down
- e.g. print out hierarchy position in the company(military ranking)

Depth-Frist Traversal
- from top all the way to the bottom
- from the left side all way the down then back to the topper level, then go down again.

Tree class
- root node on the top

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {    //represent an individual node in our tree
  constructor(data) {   //constructor will be called evertime we create a new instance, here we accept data as an argument
    this.data = data;
    this.children = [];
  }

  add(data) { //given some data, create a new node and add it to the current node's children array
    this.children.push(new Node(data));   //push the new node to the children
  }

  remove(data) {  //given some data, look at each child of the current nide and remove any node with data === data
    this.children = this.children.filter(node => {    //filter out the ones that we would like to eliminate, reassign the value back to this.children
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {   //when we call tree, just start off from an empty root
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];    //take root node to a brand new array
    while (arr.length) {    //as long as we have something in the arr
      const node = arr.shift();   //shift takes the first element in the array, and always take out the very first one in the arr
                                  //push all the children from the node we take out from arr.shift(), 
      arr.push(...node.children);  //push to the arr, node.children is array so we use ... to take all elemnt out of array
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();   //we take out the first item in the array

      arr.unshift(...node.children);  //take children elements and add elements to the front of the array
      fn(node);
    }
  }
}

// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;
//   tree.traverseBF((node) => {
//     node.data += 10
//   });

module.exports = { Tree, Node };
