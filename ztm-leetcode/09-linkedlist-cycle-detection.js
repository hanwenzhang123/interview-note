step 1: verify the constraints
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

step 2: write out some test cases
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1

Input: head = [1,2], pos = 0
Output: tail connects to node index 0

Input: head = [1], pos = -1
Output: no cycle

step 3: figure out a solution without code
step 4: write out our solution in code - with Set
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------
//Time: O(n)
//Space:O(n)

const findCycle = function(head){
  const seenNodes = new set();  //.add() .has()
  let currentNode = head; //will return currentNode which is the one that cycle starts
  
  while(!seenNodes.has(currentNode)){ //when the currentNode has not been seen
    if(currentNode.next === null ){ //means no cycle
      return false
    }
    
    seenNodes.add(currentNode); //add the currentNode to seenNodes
    
    currentNode = currentNode.next; //set the currentNode where the cycle starts
  }
  
  return currentNode; //return the currentNode where the cycle starts
}

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
//Floyd Tortoise and Hare Algorithm
  - two pointers, one fast, one slow
Time: O(n)
Space: O(1) //always keep to the same
  
step 8: can we optimize our solution?
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------
const findCycle = function(head) {
  if(!head) return null;
  
  let tortoise = head, hare = head;
  
  while(true) {   //will continue to run until the loop breaks
    tortoise = tortoise.next;
    hare = hare.next;
    
    if(hare === null || hare.next === null) {
      return null;    //no cycle
    } else {
      hare = hare.next; //advance one step
    }
    
    if(tortoise === hare) break;    //when overlapping, points to the same node, then break the while loop
  }
  
  let p1 = head,
      p2 = tortoise;
  
  while(p1 !== p2) {  //advance together until two meets
    p1 = p1.next; 
    p2 = p2.next;
  }
  
  return p2 //return either p1 or p2
};

console.log(findCycle(linkedList));

   
