There are a total of numCourses courses you have to take, labeled from 0 to numCourses 
 You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

step 1: verify the constraints

step 2: write out some test cases
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

step 3: figure out a solution without code

step 4: write out our solution in code
//Course schedule - naive BFS
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);
  
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0])
  }

  for(let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for(let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    
    while(queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if(current === v) return false;
      const adjacent = adjList[current];
      for(let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if(!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

canFinish(6, p)


//Course schedule - Topological Sort with adjacency list
 const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinishWithAdj = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);
  
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0])
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

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
  
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
