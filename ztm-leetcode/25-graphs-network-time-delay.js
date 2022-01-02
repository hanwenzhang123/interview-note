Algorithmic approaches
- sorting
- greedy method
- divide and conquer
- dynamic programming
- backtracking

//Graphs Dijkstra algorithm (greedy method for optimization approach)
- only applies to graphs that are directed and weighted

Greedy method is an algorithmic paradigm, a way to tackle problems
- for optimization question 
  - minimum or maximum
  - shortest path
  - shortest time
- make a decision between all my options, pick the one that most logically to optimal solution.

Dijkstra algorithm
generate array that keeps track of the weights and the distances that we have traveled so far to every vertex.
does not handle any way to graph that has negatibe weights in it.

//Question: Network Time Delay
There are n network nodes labelled 1 to N
given a times array, 
  n is the times array
  containing edges represented by array [u,v,w] 
where u is the source node, 
  v is the target node, 
  w is the time taken to travel from the source node to the target node
send a signal from a given node k, 
  return how long it takes for all nodes to receive the signal
  return -1 if it is impossible

step 1: verify the constraints
can the graph be unconnected?
  yes, accoount for an unconnected graph
can the time be negative integers?
  no, the weight of edges is always positive

step 2: write out some test cases
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1

step 3: figure out a solution without code

step 4: write out our solution in code
// Priority Queue implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

//Network time delay - Dijkstra's Algorithm Solution
//Time: O(E*logN + N*logN) - e is edges and n is nodes
//      O(E*logN)
//Space: O(E+N)

const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]

const networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);  //create N arrays and filled with infinite values
  const adjList = distances.map(() => []);  //every value to be an empty array, map also returns array
  distances[k - 1] = 0;   //index that are representative of the identifier for the respective node, just substract one
  
  //priority queue takes the comparator function that we want in order to figure out whether it is a min heap or a max heap.
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);  //always want the smallest one, referencing the distances value
  heap.push(k - 1); //initial k value, minus 1 due to index
  
  //fill in our adjacency list based on our times array.
  for(let i = 0; i < times.length; i++) { //get the individual variables
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]); //fill out adjList value, minus 1 due to identifier
  }
  
  while(!heap.isEmpty()) {  //as long as there is value in the heap
    const currentVertex = heap.pop();   //removes the last element

    const adjacent = adjList[currentVertex];  //get the neighbor that connected to our current vertex
    for(let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0]; //neighboring vertex identifier
      const weight = adjacent[i][1];  //weight
      if(distances[currentVertex] + weight < distances[neighboringVertex]) {  //do the check 
          distances[neighboringVertex] = distances[currentVertex] + weight; //update the value
          heap.push(neighboringVertex); //push the value into the heap
      }
    }
  }
  
  const ans = Math.max(...distances); //get the max number from distances in array of integers

  return ans === Infinity ? -1 : ans;   //return the answer
};

console.log(networkDelayTime(t, 5, 1))

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
//What is The Bellman-Ford Algorithm Solution? - Conceptualizing Dynamic Programming
Dynamic programming by building out the entire state space tree and exploring every possible path and option.
Store the value of this work somewhere so when we come back, we do not have to recalculate it, we have saved it somewhere.
Bellman-Ford Algorithm allows negative weights in it.

//Network time delay - Bellman-Ford Algorithm Solution
//Time: O(N*E)
//Space: O(N)
const t = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]

var networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);    //fill with all infinity
  
  distances[k - 1] = 0; //index starting 0
  for(let i = 0; i < N - 1; i++) {    //Bellman-Ford Algorithm
    let count = 0;    //count when value changes
    for(let j = 0; j < times.length; j++) {   //run through all different edges
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      
      if(distances[source - 1] + weight < distances[target - 1]) {  //condition check current source node plus node is less than the target in distance
        distances[target - 1] = distances[source - 1] + weight;   //update distance in target
        count++;    //increment the count
      }
    }
    
    if(count === 0) break;    //if no value updated, then break the loop
  }
  
  const ans = Math.max(...distances); //get the maximum value from distances array
  return ans === Infinity ? -1 : ans;   //if inifinity then return -1, otherwise return the answer of maximum value in distance array
};

console.log(networkDelayTime(t, 5, 1))
