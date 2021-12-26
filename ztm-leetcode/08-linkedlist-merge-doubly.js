//Double Linked List
class ListNode {
 value: any,
 prev: ListNode,
 next: ListNode
}

null <-> x <-> x <-> x <-> x <-> null
        head              tail

//Question
Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list.
these child list can also have one or more child doubly linked lists of their own, and so on.

class ListNode {
 value: any,
 prev: ListNode,
 next: ListNode,
 child: null
}

//we always want to merge a child into the middle portion between the parent and the parents next value.

step 1: verify the constraints
Can a doubly linked list have multiple child list node?
  yes, every list node have multiple levels of children
What do we do with child properties after flattening?
  just set the child property value to null

step 2: write out some test cases
//we care about the order of the linked lists
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

Input: head = [1,2,null,3]
Output: [1,3,2]

Input: head = []
Output: []

lists = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
1---2---3---4---5---6        
        |        
        7---8---9---10            
            |            
            11---12

step 3: figure out a solution without code
step 4: write out our solution in code
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]

const buildMultiLevel = function(nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for(let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if(Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }
  
  return head;
}

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = head => {
  if(!head) {
    return;
  }

  console.log(head.val)

  if(head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
}

const printList = head => {
  if(!head) {
    return;
  }

  console.log(head.val);
  
  printList(head.next);
}

// --------- Our solution -----------

var flatten = function (head) {
  if (!head) return head;   //if head is not exist, just return head

  let currentNode = head;   //set the current node 
  while (currentNode !== null) {  //as long as head is not null, while loop keeps running
    if (currentNode.child === null) { //when current node has no child, we just move forwards
      currentNode = currentNode.next; //just advance the current node to next
    } else {    //when there is a child, we start merging the child to the list
      let tail = currentNode.child;   //let the tail be the pointer - currentNode.child
      while (tail.next !== null) { //while we have a tail.next
        tail = tail.next;   //tail will be the next value to tail
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {   //when next value value is null
        tail.next.prev = tail; //tail.next.prev still points to the tail
      }

      currentNode.next = currentNode.child; //the next node point to the child
      currentNode.next.prev = currentNode;  //set the current node (next's previous node) points back to the current node
      currentNode.child = null;
    }
  }

  return head;
};

printListMulti(multiLinkedList);
console.log('after flatten');
printList(flatten(multiLinkedList));

step 5: double check for errors

step 6: test our code with our test cases

step 7: space & time complexity
Time: O(n)
Space: O(1)

step 8: can we optimize our solution?
  
