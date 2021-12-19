//Pointer - a reference to something else in memory
const obj1 = {a: true};
const obj2 = obj1 //pointer, reference to obj1, both point to the same location in memory

obj1 = 'booya'; //both obj1 and obj2 change
delete obj1;  //we still have obj2 due to its memory location
console.log('2', obj2);   //true

//we delete the memory address that is unused 
//but obj2 is still referencing this location and memory (obj1 used to be)
//value in memory is not going to be deleted
//garbage collection

obj2 = 'hello'  //referencing the memory space, now is a string

//memory value {a: true} got garbage collected and automatically deleted because nothing is poiting to it 

//console.log('1', obj1);
console.log('2', obj2); //hello
   
