//build our own binary search tree
 
class Node {   //new node
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){  //create an empty tree using this constructor
    this.root = null;
  }
 
  insert(value){
    const newNode = new Node(value); //create the new node
    if (this.root === null) { //if there is no other nodes, we want to make it as our root node
      this.root = newNode; //it is the only node
    } else {  //if the root node is already filled
      let currentNode = this.root;  //set the current node
      while(true){ //keep looping, make sure there is a way to break the loop
        if(value < currentNode.value){ //value is what we insert
          //Left                   //go left if the value is less than current node
          if(!currentNode.left){ // check if there is a left node to the current node
            currentNode.left = newNode; //if not, set the new node as the current node to the left
            return this;  //return the value
          }
          currentNode = currentNode.left;   //if there is not a node on the left, just set the current node to the left
        } else {
          //Right                 //go right if the value is greater than or equal to the current node
          if(!currentNode.right){  //make sure there is nothing to the right of the current node
            currentNode.right = newNode;  //set the new node to the right
            return this;     //stop looping, return this
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
 
  lookup(value){ //the node we looking for, if the item exists in the tree
    if(!this.root){  //if there is such thing in the root node
     return false;
    }
   let currentNode = this.root;  //otherwise
   while(curentNode){  //keep looping
    if(value < currentNode.value) {
     currentNode = currentNode.left;  //go left if it is less than
    } else if (value > currentNode.value) {
     currentNode = currentNode.right;
    } else if (currentNode.value === value) {
     return currentNode;
    }  //we only return something with a value if we can find it. 
   }
   return false;  //if we do not find anything, return false. 
  }
 
  remove(value) {
    if (!this.root) { //check anything in the root
      return false;  //nothing in the root then return false
    }
    let currentNode = this.root;
    let parentNode = null;  //we declare a new variable as the parent
    while(currentNode){ //loop
      if(value < currentNode.value){  //less than current node, go left
        parentNode = currentNode;  //keep track the parent node
        currentNode = currentNode.left;
      } else if(value > currentNode.value){  //greater than go right
        parentNode = currentNode;  //track the parent node
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {  //when we get a match
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root)) //testing if the binary tree works

//     9
//  4     20
//1  6  15  170

function traverse(node) {  //testing out using recursion
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
