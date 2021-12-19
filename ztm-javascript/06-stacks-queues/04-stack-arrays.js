//array already has push and pop

class Stack {
  constructor(){
    this.array = [];  //an empty array
  }
  peek() {    //see the very end of the array, the lastest thing we added
    return this.array[this.array.length-1];
  }
  push(value){
    this.array.push(value); //push to the array
    return this;  //return the current list
  }
  pop(){
    this.array.pop();
    return this;  //return the current list
  }
}

const myStack = new Stack();
myStack.peek(); //undefined, nothing in the array list yet
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek(); //discord
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
