class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){  //constructor
    this.first = null;    //who is first
    this.last = null;   //who is last
    this.length = 0;    //currently 0 with null first and null last
  }
  
  peek() {  //get the very first item in our queue (line)
    return this.first;
  }
  
  enqueue(value){   //adding to the line, like push to the end of the line
    const newNode = new Node(value);    ///create a new node here using the Node constructor
    if (this.length === 0) {  //if there is nothing in the queue
      this.first = newNode; //only 1 node which it is this node
      this.last = newNode;  //only 1 node which it is this node
    } else {
      this.last.next = newNode; //point the new node as the last in line
      this.last = newNode;  //updating the this.last the one in constructor pointing the last one as the new node
    }
    this.length++;
    return this;
  }
  
  dequeue(){    //delete from the first, like shift the first item, let the first item out
    if (!this.first) {    //if the queue is empty
      return null;    //just return null for an empty queue
    }
    if (this.first === this.last) { //if only one in the line
      this.last = null;   //make sure the last point to the null
    }
    const holdingPointer = this.first; //if we do not have a reference, we just completely lose the one we dequeue as nothing pointing to the memory space
    this.first = this.first.next; //first priority is the one that next to the current first 
    this.length--;    //length decreases
    return this;  //return to the current queue in memory
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir'); //the last one
myQueue.peek();
myQueue.dequeue();    //if we do not have "const holdingPointer = this.first;", the first one here Joy is completely gone due to garbage collection
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
   
