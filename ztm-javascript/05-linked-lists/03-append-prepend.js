//10 --> 5 --> 16

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10,  //node
//     next: {  //pointer reference to the next node (another object)
//       value: 5,
//       next: {
//         value: 16 //tail
//         next: null   //tail then point to null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {   //track the head
      value: value,   //the value we pass in
      next: null    //when we first created to have null begin with. this is the first one
    };
    this.tail = this.head;  //this refer to the linked list
    this.length = 1; //optional, track the length
  }
  
  // add a method prepend() to the linked list that adds a node to the beginning of the list
  append(value) {
    const newNode = { //new node that attach to the next node
      value: value,
      next: null
    }     //const newNode = new Node(value)  //instantiate the new node class
    console.log(newNode)
    this.tail.next = newNode; //last pointer point to the new node we created, but still at the current node so we assign the node next code
    this.tail = newNode;  //update the tail to be the new node
    this.length++;  //length plus one in count
    return this;
  }
  
  // add a method prepend() to the linked list that adds a node to the beginning of the list
  prepend(value) {
    const newNode = {   //create an empty node with values
      value: value,
      next: null    //here we reference to null instead of this.head
    }     //const newNode = new Node(value)  //instantiate the new node class
    newNode.next = this.head; //the new node we just created is going to point to this.head
    this.head = newNode;    //update the new head
    this.length++;    //increase the length
    return this; 
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)

   
//Node Class
DIY - do not repeat yourself
new node is another class

class Node {    //create a node with a value property and a next property
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
