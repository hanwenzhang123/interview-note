class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek() {
    return this.top;    //see the very top item in the list
  }
  
  push(value){
    const newNode = new Node(value);  //create a new node using the node class
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;  //holding the current top node
      this.top = newNode; //assign the newNode as the top one
      this.top.next = holdingPointer;   //old top is going to be the top.next node
    }
    this.length++;
    return this;
  }
  
  pop(){  //remove the top item
    if (!this.top) {  //check if there is not an item, then we just return null
      return null;
    }
    if (this.top === this.bottom) {   //if only one node left
      this.bottom = null;   //make this the last node as null
    }
    const holdingPointer = this.top;  //without this line, the item disappears from the memory due to garbage collection, here we assign to the variable
    this.top = this.top.next; //now the top is the next item on the list, updated
    this.length--;  //decrease the length
    return this;    //if we return holdingPointer, it will be the one it poped. 
  }
// Because JavaScript is a garbage collected language, if not holding a pointer to this dot top.
// this node that contains the top item wouldn't be referenced by anything and not used by anything. 
// Which means in a garbage collected language like JavaScript, that it will get automatically removed from memory during garbage collection.
// in case we still want to have access to it, we declare and assign to holdingPointer; otherwise it just disappear from the memory
  
  //isEmpty
}

const myStack = new Stack();
myStack.peek(); //empty stack, null
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();//discord as it is the newest one (the last thing we added)
myStack.pop(); //discord
myStack.pop(); //udemy
myStack.pop(); //google

//Discord
//Udemy
//google
    
