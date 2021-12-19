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
      console.log(newNode)
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
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
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
  
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  
  // add a method reverse() to the linked list that reverses the entire list of nodes
    reverse() {
      if (!this.head.next) {  //if next head node does not exist, if only the 1 node exist
        return this.head; //if this is the only node, we can also do this.length === 1
      }
      let first = this.head;  //let the first one be the head
      this.tail = this.head;  //let the tail, the last one becomes the head
      let second = first.next;  //this is the second one in the list
  
      while(second) { //while the second node exist
        const temp = second.next; //create temp that holds the next
        second.next = first;  //switch 2nd to 1st
        first = second; //switch 1st to second
        second = temp;  //switch 2nd top temp which is the next in list
      }
  
      this.head.next = null;
      this.head = first;  //after looping through everything, the last one will be the first
      return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse()
