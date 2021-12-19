Queue               Array Equivalent
add to queue        array.unshift()
remove from queue   array.pop()

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() { //constructor will automatically be called when we create a new instance
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);    //add to the beginning when add
  }

  remove() {
    return this.data.pop();   //remove the last record from the array
  }
}

module.exports = Queue;
