Doubly Linked List links to the node before it and next to it
  an extra block (data) that also links to the previous node
Doubly Linked List allows us to traverse our list backwards
  it holds more memory due to the extra block

//convert the previous singly linkedlist to now doubly linkedlist
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null  //a new one, add pre node block for the doubly linked list
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null    //add prev
    }
    console.log(newNode)
    newNode.prev = this.tail;   //add this line to refer to the previous property
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null  //add new property
    }
    newNode.next = this.head;
    this.head.prev = newNode  //prev is pointing too the newNode
    this.head = newNode;    //update the newNode as the head
    this.length++;
    return this;
  }
  
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null    //new node
    }
    //we need to grab both leader and the follower
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;  //update the newNode
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;  //make sure the newNode that links to the previous one
    this.length++;
    console.log(this)
    return this.printList();
  }
  
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)  //head, prev: null
myLinkedList.append(16) //tall, prev: 5

myLinkedList.prepend(1) //now this is the head with prev: null

myLinkedList.insert(2, 99)

// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
// myLinkedList.reverse()

  
