Max Heap - the root node is the greatest value
Min Heap - the root node is the smallest value

//Breadth-first search
parent: floor((index - 1) / 2)
left: (index*2) + 1
right: (index*2) + 2

//Insertion in Heap - Shift Up
push to the end of the array then compare and swap if the added element is larger

//Deletion in Heaps - Shift Down
find left and right child then compare and swap if the child element is larger

//priority queue class implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {    //number of nodes inside the _heap()
    return this._heap.length;
  }

  peek() {  //check on the root in the heap
    return this._heap[0];
  }

  isEmpty() {   //clean up the heap
    return this._heap.length === 0;
  }

  _parent(idx) {  //parent of the node
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {   //left child of the node
    return idx * 2 + 1;
  }

  _rightChild(idx) {    //right child of the node
    return idx * 2 + 2;
  }

  _swap(i, j) {   /swap i and j from heap
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {    //using comparator to see which node is larger
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {   //push the value to the end of the array
    this._heap.push(value);   //push the value to the end of the heap
    this._siftUp();   //shift up to the right place

    return this.size();
  }

  _siftUp() {   //swap with parent until can not swap anymore
    let nodeIdx = this.size() - 1;    //index will do the comparation, size - 1 to get the last value inside the heap

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {    //condition: node larger than its parent, 0 < nodeIdx in case we reach the touch
      this._swap(nodeIdx, this._parent(nodeIdx)); //while condition is true, do the swap: the node and its parent
      nodeIdx = this._parent(nodeIdx);    //update the node to be the parent value now
    }
  }

  pop() {   //pop the last element
    if (this.size() > 1) {    //when size of the array is large than 1
      this._swap(0, this.size() - 1);   //swap the first element and the last element of the array
    }

    const poppedValue = this._heap.pop();   //pop the element
    this._siftDown();   //shift down the array to the correct order
    return poppedValue;
  }

  _siftDown() {   //internal method to shift the elements down to the correct order
    let nodeIdx = 0;

    while (   //while the comparation conditions are true
      (this._leftChild(nodeIdx) < this.size() &&    //when left child exist and left child larger
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&   //when right child exist and right child larger
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&    //when right child exist
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))    //compare right child is greater then the left child
          ? this._rightChild(nodeIdx)   //if true
          : this._leftChild(nodeIdx);   //if false

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while(!pq.isEmpty()) {
  console.log(pq.pop());
}
 
