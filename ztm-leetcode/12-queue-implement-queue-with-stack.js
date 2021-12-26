Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
- enqueue: append a value to the end of the queue
- dequeue: remove and the value at the start of the queue
- peak: return the value at the start of the queue
- empty: return a boolean value of whether the queue is empty of not

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

step 1: verify the constraints
step 2: write out some test cases
step 3: figure out a solution without code

step 4: write out our solution in code
class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {  //O(1)
    this.in.push(val);  //push the value to this.in
  }

  dequeue() {   //O(n)
    if (this.out.length === 0) {
      while(this.in.length > 0) { //as long as in is not empty
        this.out.push(this.in.pop()); //pop this.in then push in this.out
      }
    }
    
    return this.out.pop();    //pop the this.out
  }

  peek() {   //O(n)
    if (this.out.length === 0) {
        while(this.in.length > 0) { //as long as in is not empty
            this.out.push(this.in.pop()); //pop this.in then push in this.out
        }
    }
    
    return this.out[this.out.length - 1];   //return the last value from this.out
  }

  empty() {   //O(n)
    return this.in.length === 0 && this.out.length === 0;   //return true or false based on whether any value in queue
  }
};

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
  
