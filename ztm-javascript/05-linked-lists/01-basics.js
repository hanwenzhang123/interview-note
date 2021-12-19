What is a linked list? - a list that is linked
Linkedlist is flexible, used a lot in implementing file systems, browser history (traverse back and forwards)

//Problems with Arrays
static - only certain amount of data and next to each other in memory
dynamic - can be dynamic in term of the size in array
//performance implication - O(n) - double up the memory once it reaches a certain limit in another location
//bad performancce for any sort of operation like insert and delete that had to shift indexes over

//Problems with with Hash tables 
we can store things wherever we want in memory while hash table knows where it stores, but it is not ordered.

Linked Lists is the solution for the problems above. Choose LinkedList over Array is the ability to grow and shrink as needed


//Big O
prepend - O(1)  //add at the beginning
append - O(1)   //add at the end
lookup - O(n)   //traversal, from the head to what we look for
insert - O(n)   //go one by one, find the index and insert there
delete - O(n)   //we have to find the item
   

//LinkedLists
//Pros
- fast insertion
- fast deletion
- ordered
- flexible size

//Cons
- slow lookup
- more memory


//2 types of linked lists
- singly
- doubly

//singly vs doubly
singly 
- fairly simplier
- less memory (less block)
- less code
- a bit faster
- fast insertion and deletion
- not that much searching
- can not be iterated in reverse or traverse from back to front

doubly
- it can be iterated or traverse both from the front and back
- if you need to delete the previous node, no needs to traverse
- good for searching like backwards instead of just forwards
- fairly complex
- requires more memory, storage
- extra operations we need to perform when insert and delete


//singly
contains a set of nodes, think nodes as blocks
nodes have 2 element, the value of the data you want to store
                    , and the pointer to the next node in line
the first node called head 
the last node called tail 
linked lists are null terminated which signifies that it is the end of the list - null

const basket = ['apples', 'grapes', 'pears']

linked list: apples --> grapes --> pears

apples
8947 --> grapes
          8742 --> pears
                    372 --> null
  

//why linked lists
Linkedlist has a loose structure that allows you to insert the value to the middlle of the list by simply resetting few pointers
While if we want to insert something in array, we have to shift everything down, which costs a lot of time, O(n)

In Array, elements are indexed; 
In LinkedList, it starts at the head and traverse (iteration) the list until get the element, O(n)

In Array, reading from sequential memory which is right next to each other, which is faster than scattered addresses
LinkedList/nodes is scattered all over in the memory like hash tables, slower comparatively

In LinkedList, it is easier to insert something as it scattered all over memory we just keep adding it. In Array, we have to do shifting
In LinkedList, it is easier to delete data as well.

In LinkedList, it is linked that each node points to the next node, you can have sorted data unlike a hash table.
 
   
