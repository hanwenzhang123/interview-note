//Introducing Linked List
- singly linked list
- doubly linked list

//List Node:
class ListNode {
  value: 2,
  next: Listnode
}

head -> x -> x -> x -> tail -> null
when you get a link list or have to return a link list -> always returning the head.
if we have a cycle in linked list, it is no good

step 1: verify the constraints

//Reverse a linked list
Q: given a linked list, return it in reverse

What do we return if we get null or a single node?
just return null and the node back respectively

step 2: write out some test cases
1 - 2 - 3 - 4 - 5 - null
5 - 4 - 3 - 2 - 1 - null

step 3: figure out a solution without code
step 4: write out our solution in code
//NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}

// --------- Our solution -----------

var reverseList = function(head) {
  let prev = null;    //initialize prev as null, will return it
  let current = head; //initialize the current variable as our head node
  
  while(current) {  //while current is trusy
    let nextTemp = current.next;   //next node (we are going to work on)
    current.next = prev;  //the step we reverse the node, like 1 -> null, then 2 -> 1 -> null
    prev = current; //set previous as current node
    current = nextTemp; //set current as next node, forward to the next value
  }
  
  return prev;  //return the linked list in reversed version
};

printList(linkedList);
console.log('after reverse')
printList(reverseList(linkedList))

step 5: double check for errors
step 6: test our code with our test cases

step 7: space & time complexity
Time: O(n)
Space: O(1)

step 8: can we optimize our solution?
  
//Question 2
//M, N Reversals
Given a linkedlist and numbers m and n, return it back with only positions m to n in reverse
  
step 1: verify the constraints
- will m and n always be within the bounds of the linked list?
  yes, assume 1 <= m <= n <= length of linked list
- can we receive m and n values for the whole linked list?
  yes, we can receive m=1 and n=length of linked list

step 2: write out some test cases
m=2 n=4
1-2-3-4-5-null => 1-4-3-2-5-null
m=1 n=5
1-2-3-4-5-null => 5-4-3-2-1-null
m=1 n=1
5 => 5
m=0 n=0
null => null

step 3: figure out a solution without code
//steps to reverse linked list
1. get current node
2. store next value
3. update next value to list so far
4. store current node as list so far
5. update current node to stored next value at step 2
6. increment position

step 4: write out our solution in code
//NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}

// --------- Our solution -----------

var reverseBetween = function(head, m, n) {
  let currentPos = 1, currentNode = head;   //current position tells us what to do at each iteration
  let start = head;   //start will be m-1, it represents the last list node before the start of our reverse link list section.
  
  while(currentPos < m) {   //while loop checks and see current position less than m
    start = currentNode;  //start is the current node
    currentNode = currentNode.next;   //update the current node position to next
    currentPos++;   //increment the current position count
  }
  
  let newList = null, tail = currentNode;
  
  while(currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
  
  start.next = newList;
  tail.next = currentNode;
  
  if(m > 1) {
    return head
  } else {
    return newList;
  }
};

printList(linkedList);
console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity

Time: O(n)
Space: O(1)

step 8: can we optimize our solution?

 
