There are two types of Array, static and dynamic

static - requires us to declare the number of the array list items initially
       - if we want to resize, we copy and rebuild the array in a new location

//C++ - faster in term of memory, use less memory
int a[20];
int b[5] {1, 2, 3, 4, 5}  //we copy, edit, then save to a new location if we change memory

dynamic - expand as you add more, we do not need to declare the size initially
  like JavaScript, list in Python ArrayList in Java 
//use more memory

let strings = ['a', 'b', 'c', 'd'];  

string.push('e'); //O(n) - because we looping, can't assume everytime O(1)

//inital ['a', 'b', 'c', 'd']; only use memory of 4 blocks of space 
//if it is dynamic array, we add another one 'e' (.push(e) at the end)  // ['a', 'b', 'c', 'd', 'e'];  
//we loop over the array, copy them and move it to a different location now 8 blocks of space, it usually doubles the space


lookup  //O(1)
*append  //O(1)   can be O(n)
insert  //O(n)
delete  //O(n)
  
