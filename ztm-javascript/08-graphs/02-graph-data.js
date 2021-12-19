    2  -  0
  /   \
 1     3

Edge List
//the array simply states the connections
//an edge list simply shows the connection that zero is connected to two and two is connected to zero
//Two is connected to three. Three is connected to two to one, one to three, so on and so forth.
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]; //within the array, I have 4 arrays inside the array


Adjacent List
//create a graph where the index is the node and the value is the nodes neighbors
//in the index of zero, the first item zero is connected to two.
//The Index of one is connected to two and three.
//Index of two is connected to zero one and three.
//Index of Three is connected to one and two.
const graph = [[2], [2,3], [0,1,3], [1,2]]; //the index of the array is the value of the actual Graph node
//if a node value is something other than a number, you can actually give it a value. So a key and a value.


Adjacent Matrix
//This matrix is simply going to have zeros and ones indicating whether the Node X has a connection to Node Y 
//zero means no 
//one means yes
const graph = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
  ]

const graph = { //you can use an object to give it a key and value
 0: [0,0,1,0],
 1: [0,0,1,1],
 2: [1,1,0,1],
 3: [0,1,1,0]
}
  
