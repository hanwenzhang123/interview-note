Graphs 
  - a collection of nodes (node - vertex)
  - node can be connected to another node
  - connection is called edge
  - can have multiple connections to multiple nodes
  - nodes connect in a way connect to each other in circular way - cycle
  - you can have numerous cycles
  
undirected: traverse any node to another node back and forth
direct: dictated by the direction of the actual arrow, only traverse one way based on the direction
unweighted: there is no associated weight to any of these edges
weighted: associated weight to every edge
unconnected graph: two sections are not joined together

//Adjacency List & Adjacency Matrix

  //Coding BFS
//Adjacency List - BFS
const adjacencyList = [   //receive the list as argument that represent the entire graph
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

const traversalBFS = function(graph) {
  const seen = {};    //keep track all the seen vertex
  const queue = [0];    //initial BFS, we need a queue, starting value with 0
  const values = [];    //contain every vertex when we do the traversal

  while(queue.length) { //while the queue has a value
    const vertex = queue.shift(); //get the first value from queue
    
    values.push(vertex);  //push this value into the values array
    seen[vertex] = true;  //also set this value to the seen object as true so we know we won't double count the value

    const connections = graph[vertex];  //give us the array value that stores inside the array
    for(let i = 0; i < connections.length; i++) { //loop through the connections
      const connection = connections[i];  //get each connection
      if(!seen[connection]) { //make sure we have not seen this value yet
        queue.push(connection);   //then we add the connection to the queue
      }
    }
  }

  return values;    //return the values
}

console.log(traversalBFS(adjacencyList));

//Adjacency Matrix - BFS
const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalBFS = function(graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while(queue.length) {
    const vertex = queue.shift();
    
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for(let v = 0; v < connections.length; v++) {
      if(connections[v] > 0 && !seen[v]) {
        queue.push(v);
      }
    }
  }

  return values;
}

console.log(traversalBFS(adjacencyMatrix));
  
  //Coding DFS - go as deep as possible
//Adjacency List - DFS
const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);    //push the vertex to the values
  seen[vertex] = true;    //set the vertex in seen as true

  const connections = graph[vertex];  //find the connection of the vertex
  for(let i = 0; i < connections.length; i++) {
    const connection = connections[i];    //loop through each connection

    if(!seen[connection]) {   //if not in the seen connection vertext yet
      traversalDFS(connection, graph, values, seen);    //recursion again
    }
  }
}

const values = [];
traversalDFS(0, adjacencyList, values, {})

console.log(values);

//Adjacency Matrix - DFS
const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let v = 0; v < connections.length; v++) {
    if(connections[v] > 0 && !seen[v]) {
      traversalDFS(v, graph, values, seen);
    }
  }
}

const values = [];
traversalDFS(0, adjacencyMatrix, values, {})

console.log(values);
 
