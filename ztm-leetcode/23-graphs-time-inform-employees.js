// Time Needed to Inform All Employees
you will receive a manager array where managers[i] is the id of the manager for employee
each employee has one direct manager
the company head has no manager (managers[headID] = -1).
it is guaranteed the subordination relationships will have a tree structure

step 1: verify the constraints
n: total number of employees 
headID: the head of the company
informTime: accumulate and figure out the time for every single employee to get the news

//cyclic? 
can employees have more than 1 manager?
  no, employees can only have 1 manager
//unconnected?
does every employee have a manager?
  yes, every employee has a manager except the head of the company who has no manager
//weighted?
//directed?

step 2: write out some test cases
Input: n = 1, headID = 0, manager = [-1], informTime = [0]
Output: 0

Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
Output: 1

Input: n = 8, headID = 4, manager = [2,2,4,6,-1,4,4,5], informTime = [0,0,4,0,7,3,6,0]
Output: 13

Input: n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1]
Output: 21

step 3: figure out a solution without code
//how to represent our graph as an adjacency list


step 4: write out our solution in code
//solving our poblem logically using DFS traversal
const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function(n, headID, managers, informTime) {
  const adjList = managers.map(() => []);
  
  for(let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if(manager === -1) continue;
    
    adjList[manager].push(employee);
  }
  
  return dfs(headID, adjList, informTime);
};

const dfs = function(currentId, adjList, informTime) {
  if(adjList[currentId].length === 0) {
    return 0;
  }
  
  let max = 0;
  const subordinates = adjList[currentId];
  for(let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  
  return max + informTime[currentId];
}

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
