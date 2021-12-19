Lookup - O(n) (traversal) worse case go through the whole list
Insert - O(n) looping through lookup
Delete - O(n)

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  
  //while loop is great when we do not know the length of the list, do something while a condition is met
  printList() {   //print out in an arraay
    const array = [];   //empty
    let currentNode = this.head;  //the head, 1st one
    while(currentNode !== null){  //as long as this is a current node
        array.push(currentNode.value); //just push the value to the array
        currentNode = currentNode.next; //move to the next one
    }
    return array;
  }
  
  // add a method insert() to the linked list that adds a node to the specified index.
  insert(index, value){ //we have to traverse so O(n)
    //Check for proper parameters;
    if(index >= this.length) {  //if the index is larger, then just add to the end of the list
      console.log('yes')
      return this.append(value);  //to the last one
    }
    const newNode = { //create the new node
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1); //'this' refers to method onto this class
    const holdingPointer = leader.next; //save the reference
    leader.next = newNode;  //leader point to our new node
    newNode.next = holdingPointer;  //new node point to the holding one
    this.length++;
    return this.printList();
  }
  
//   * - *  //the first node will be the leader, second is the holding pointer
//     *  //the new node
  
  traverseToIndex(index) {    //traversal to find the item
    //Check parameters, we just assume it is valid here
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){   //traversing from the head all the way until counter equals to index
      currentNode = currentNode.next; //as soon as the counter becomes the index, in our case traverseToIndex(index-1), then stop
      counter++;    //keep moving the current node to the right
    }   //increment the counter 1 by 1
    return currentNode;   //return the currentNode
  }
  
  // add a method remove() to the linked list that deletes a node to the specified index.
  remove(index) { //we have to traverse so O(n)
    // Check Parameters - whether if it is out of the length
    const leader = this.traverseToIndex(index-1); //get the reference to the leader
    const unwantedNode = leader.next; //the way we get the reference to the unwanted node, we grab it here
    leader.next = unwantedNode.next;  //now we make sure that leader.next is pointing to the node that is next to the unwanted node
    this.length--;  //decrease the length
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99); 
myLinkedList.insert(20, 88);  //to the last one due to out of the length of the list
myLinkedList.remove(2);
myLinkedList.printList();
  
