There are a total of numCourses courses you have to take, labeled from 0 to n-1 (numCourses)
Some courses have prerequisites courses. this is expressed as a pair like [1, 0] which indicates you must take course 0 before taking course 1
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Given the total number of courses and an array of prerequisite pairs, return if it is possible to finish all courses
Return true if you can finish all courses. Otherwise, return false.

step 1: verify the constraints
n: total course
prerequisites: array
//if cycle - return false
can we have courses unconnected to other courses?
 yes, account for separate course chains

step 2: write out some test cases
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

step 3: figure out a solution without code
//while performing the traversal, if we ever make it back to a node that we have seen before, then we know we have a cycle.

step 4: write out our solution in code
//Course schedule - naive BFS
//Time: O(P+n^2)
//Space: O(n^2)
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []); //generate a new Array object structure based on n(total course) filled in with 0, then map each to turn to empty array
  
  for(let i = 0; i < prerequisites.length; i++) { //for-loop to get the each value in prerequisites - O(n)
    const pair = prerequisites[i]; //each prerequisites pair
    adjList[pair[1]].push(pair[0]) //second value is the value that would be direct towards, and push the first value in the pair in 
  }

 //implementing BFS - loop over total size of n
  for(let v = 0; v < n; v++) { //O(n)
    const queue = [];
    const seen = {};
    for(let i = 0; i < adjList[v].length; i++) {  //at the current adjList
      queue.push(adjList[v][i]); //push to queue
    }
    
    while(queue.length) {  //once we have the value in queue - O(n)
      const current = queue.shift(); //get the current value which is the first one in queue
      seen[current] = true; //add to the seen object

      if(current === v) return false;  //check if current value is equal to the vertex, meaning the cyclic, then return false
      const adjacent = adjList[current]; //get the adjacent and loop through
      for(let i = 0; i < adjacent.length; i++) { //O(n)
        const next = adjacent[i]; //get the next value
        if(!seen[next]) { //as long as not seen before, push to the queue
          queue.push(next);
        }
      }
    }
  }

  return true;  //after passing the validation, return true
};

canFinish(6, p)

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
//Time: O(P+n^2)
//Space: O(n^2)
step 8: can we optimize our solution?
 //Topological Sort - always applicable in Directed Acyclic Graph (no cycle)
 - a sort returns, a specific order of the vertex is of a given graph.
 - have indegree values (have edges that are directed) 
   - represented as how many connections are coming into this vertex. 
   - how many edges are pointing into this vertex.
 
//Course schedule - Topological Sort with adjacency list
 const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinishWithAdj = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0); //fill the initial indegree array with 0
  const adjList = inDegree.map(() => []); //use indegree to make adjlist
  
  for(let i = 0; i < prerequisites.length; i++) { //loop through prerequisites
    const pair = prerequisites[i];
    inDegree[pair[0]]++;  //increases every pair based on its first value
    adjList[pair[1]].push(pair[0])  //filling out adjList, push in the value of first value in pair
  }
  
  const stack = [];
  
  for(let i = 0; i < inDegree.length; i++) { //loop through the indegree
    if(inDegree[i] === 0) {
      stack.push(i);   //push the value to the stack
    }
  }
  
  let count = 0;
  
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    const adjacent = adjList[current];

    for(let i = 0; i < adjacent.length; i++) { 
      const next = adjacent[i];
      inDegree[next]--;
      if(inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  
  return count === n;
};

canFinishWithAdj(6, p)

//Course schedule - Topological Sort without adjacency list
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  
  for(let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }
  
  const stack = [];
  
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }
  
  let count = 0;
  
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    for(let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if(pair[1] === current) {
        inDegree[pair[0]]--;
        if(inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }
  
  return count === n;
};


canFinish(6, p)
