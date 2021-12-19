//Graph Implementation
an object versus an array
because if we start removing things from the graph or placing things in the graph that is out of order, it is going to cost us a lot.
Array on shifting and shifting is expensive.
With objects, we can quickly find items and see their connections.

//Graph
class Graph { 
  constructor() { 
    this.numberOfNodes = 0;   //how many nodes we have
    this.adjacentList = {};   //an empty adjacent object list here 
  }   //{0: [1, 2]}
  
  addVertex(node)  {  // add the new node, no connections yet
    this.adjacentList[node] = []; //node is the key to the object which equals to an empty array, when we enter a new node, new connection initially, add edges later
    this.numberOfNodes++; //increment the number
  } 
  
  addEdge(node1, node2) {   //add the edge to connect the node 1 and node 2
    //uniderected Graph 
    this.adjacentList[node1].push(node2);   //node 1 is going to be connected to node 2
    this.adjacentList[node2].push(node1);   //undirected so we have to do it the other way around
  } 
  
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  } 
} 

var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 

  
