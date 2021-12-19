A linked list is an ordered collection of data.
The collection contains a number of different nodes.
Each node contains some amount of data, along with a reference to the next note.
The list of nodes that form this chain has an order that is always maintained.

Two special nodes: 
- head (first)
- tail (last)

const nodeOne = {
  data: 123;
}

const nodeTwo = {
  data: 456;
}

nodeOne.next = nodeTwo

//Node Implementation
const n1 = new Node("Hi")
n1.data //"Hi"
n1.next //null
const n2 = new Node("There", n1);
n2.next // return n1


// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {    //setup for Node
  constructor(data, next = null) {    //execute everytime we create a new instance of Node, comes with 2 properties, data and next with default value null
    this.data = data;
    this.next = next;
  }
}

class LinkedList { //linkedlist class instance has no ideas of how many nodes belong to the linked list, only one property assigned to it which is head
  constructor() {  //the linkedlist instance will have one property, head, which is a reference to the first node of the linked list, by default, null
    this.head = null;
  }
// const list = new LinkedList();
// list.head = new Node(10);

  insertFirst(data) { //assign the resulting node to the head property, if linkedlist already has a node assigned to the head, just add it to the front of the list
    this.head = new Node(data, this.head);  //update the head reference, not overwriting any node
    
//     const node = new Node(data, this.head);  //accept argument data to assigned to the new Node, take any existing nodes as 2nd argument to the new Node constructor 
//     this.head = node;  //update this.head to the new Node
  }
  
// const nodeOne = new Node(5)
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(15)
// list // {"head": {"data": 15, "next": {"data": 5, "next": null}}}

  size() {    //return the number of nodes in the linked list
    let counter = 0;  //the number of the nodes in the linked list
    let node = this.head; //reference to the head first

    while (node) {    //enter while loop when node is trusy value
      counter++;    //counter increases
      node = node.next;   //assign the node to the next
    }

    return counter;
  }

  getFirst() {    //return the first node of the linked list
    return this.head;
  }

  getLast() {  //return the last node of the linked list
    if (!this.head) {   //check if no nodes associates to the linked list
      return null;    //return null right away
    }

    let node = this.head;   //let current node as the head so we can loop through
    while (node) {
      if (!node.next) {   //until the node does not have next node, then we return the current node, otherwide loop to next one
        return node;      //return the current node if no next node available, current node is the last one
      }
      node = node.next;   //loop to next node if we have the next node
    }
  }

  clear() { //empties the linked list of any nodes
    this.head = null;   //zero out the head, so no nodes in the list
  }

  removeFirst() { //remove only the first node of the linked list, the liast head should now be the second element
    if (!this.head) { //if nothing assigned to the head, just return
      return;
    }

    this.head = this.head.next;   //assign the head node to the next one if we have the head node in the list
  }

  removeLast() {    //removes the last nodes of the chain
    if (!this.head) { //if nothing assigned to the head, just return
      return;
    }

    if (!this.head.next) {    //if there is only one node in the linked list, no next second value
      this.head = null;     //just remove the only node that we have, just assign it to null
      return;
    }

    let previous = this.head;   //give reference to the first one
    let node = this.head.next;    //give reference to the second one
    while (node.next) {   //check if node.next defined, then update the value of previous and node, now node looks at the next node
      previous = node;
      node = node.next;
    }
    previous.next = null;   //just assign null (delete) the next node (second node) value
  }

  insertLast(data) {  //insert a new node with provided data at the end of the chain
    const last = this.getLast();    //get the last node

    if (last) {   //if last node exists
      // There are some existing nodes in our chain
      last.next = new Node(data);   //add to the last node chain
    } else {
      // The chain is empty!
      this.head = new Node(data);   //then just create a new node if no last nodes
    }
  }

  getAt(index) {    //returns the node at the provided index
//     if (!this.head) {   //check if we at least have one node, if not, just return
//       return null;
//     }
    let counter = 0;
    let node = this.head;    //current node
    while (node) {    //as long as there is node defined, if node does not exist, just return null below
      if (counter === index) {    //when counter and index are equal, then it is the node we are looking for
        return node;    //return the node
      }
      //not yet reach the index we are looking for
      counter++;    //increase counter
      node = node.next;   //the new node is going to be node.next
    }
    return null;    //exist the while loop, then just return null;
  }

  removeAt(index) {   //removes node at the provided index
    if (!this.head) {   //check if we have no nodes in the list, then just return
      return;
    }

    if (index === 0) {    //just remove the head node in the list
      this.head = this.head.next;   //point the second one in the chain, so we remove the first one
      return;
    }

    const previous = this.getAt(index - 1);  //the previous node 
    if (!previous || !previous.next) {   //if no previous node is not found or the previous node does not have a next node at the given index (the last node in list)
      return;
    }
    previous.next = previous.next.next;   //assign the next one to the next next one, update the reference by skipping over the one we would like to remove
  }

  insertAt(data, index) {   //create an insert a new node at provided index. if index is out of bounds, add the node to the end of the list
    if (!this.head) { //if nothing in the list
      this.head = new Node(data);   //create a new node and point the head to this new node
      return;
    }

    if (index === 0) {    //if the new node will be the head in the list
      this.head = new Node(data, this.head);    //update the head with new Node, and pass the current head as the second argument to the new node
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();   //get the previous node, if out of the current index, then get the last item in the list
    const node = new Node(data, previous.next);   //create the new node, adn pass the previous.next to next to the current new Node 
    previous.next = node;   //update the previous.next to the current new node with the previous next node next to it
  }

  forEach(fn) {   //call the provided function with every node of the chain
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {    //for every step along the node
      yield node;   //yield the current node
      node = node.next;
    }
  }
}


//Code Reuse in Linked List
insertFirst(data) => insertAt(data, 0);
insertLast(data) => insertAt(data, this.size() - 1);
removeFirst() => removeAt(0);
removeLast() => removeAt(this.size() - 1);
getFirst() => getAt(0);
getLast() => getAt(this.size() - 1)

  
//Generators 
  - execute until a yield statement found, then paused, then when next() called, looking for the yield statemenet, then execute
  - if pass on a value when call generator next, the passed value will be inserted in place of the yield statement.
//Example 1
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}
const generator = numbers();
generator.next(); //{"value": 2, "done": false}   //generate until yield
generator.next(10); //{"value": 30, "done": true}   //pass the value back into generator and continue execution, the value will be replaced in the yield statement

//Example 2
function *list(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
const generator = list();
generator.next(); //{"value": 1, "done": false}
generator.next(); //{"value": 2, "done": false}
generator.next(); //{"value": 3, "done": false}
generator.next(); //{"value": 4, "done": false}
generator.next(); //{"value": 5, "done": false}
generator.next(); //{"done": true}
generator.next(); //{"done": true}
const numbers = []; //[1, 2, 3, 4, 5]
for (let value of generator) {
 numbers.push(push) 
}

//Example 3
function *numbers(){
  yield 1;
  yield 2;
  yield* moreNumbers();
  yield 6;
  yield 7;
}
function *moreNumbers(){
  yield 3;
  yield 4;
  yield 5;
}
const generator = numbers();
const values = [];    //[1, 2, 3, 4, 5, 6, 7]
for (let value of generator) {
 values.push(value) 
}

//Example 4
class Tree {
 constructor(value = null, children = []) {
  this.value = value;
  this.children = children;
 }
 *printValues() {
  yield this.value; 
  for(let child of this.children){
    yield* child.printValues();
  }
 }
}
const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]);
const values = [];  //[1, 2, 4, 3]
for(let value of tree.printValues()){
 values.push(value)
}

module.exports = { Node, LinkedList };
  
