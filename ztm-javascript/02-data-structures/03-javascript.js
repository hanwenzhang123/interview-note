How JavaScript Works?
//Explain the difference between asynchronous and synchronous in JavaScript
//Explain the statement JavaScript is a single threaded language that can be non-blocking?
JavaScript is a single threaded language that can be non blocking.
It has one call stack and it does one thing at a time in order to not block the single thread.
It can be asynchronous with callback functions and these functions gets run in the background
through the callback queue and then the event to bring it back into the call stack.
 

//What is a program?
- allocate memory, otherwise we can not have variables and files on our computer
- parse and execute, read and run commands

JavaScript Engine - each browswer implement
Chrome is the V8 engine that reads the JavaScript that we write and change into machine executeable instruction for the browser

//Engine consists of two parts
- Memory Heap 
  where is the memory allocation happens
- Call Stack
  where your code is read and executed, tell you where you are in the program

Memory Heap - Memory Leak
We create global variables in memory heap, but with all memory, we have a limited amount that we can actually have.
by increasing the number of variables that we have, memory leak happens when you have unused memory
by having unused memory just laying around, it fills up this memory heap.
Global variables are bad, because if we forget to clean up after ourselves, we fill up this memory heap, and eventually browser will not be able to work.

Call Stack
read and execute the scripts
once it reads the first one, it gets put into the call stack, then add the second one third one.
once it is being called, it removes from the call stack


//Explain the statement JavaScript is a single threaded language that can be non-blocking?
  Single threaded means that it only has one call stack only, and only do one thing at a time
  call stack is first in last out, whatever at the top of the call stack gets run first then below that until the call stack is empty

Some languages are multi-threaded, 
  JavaScript is single threaded which do not have to deal with complicated scenarios that arise in multithreaded environment.
  You just have one thing to worry about.
Issues with multithreaded environment can have such thing as deadlocks.

Synchronous programming means line one gets executed, then line two get executed then line three,
  the later can not start until the earlier one finish
  like line two can not start until line one finishes, line three can not start until line two finishes

//Stack Overflow 
  - happens when callstack gets bigger and bigger until it does not have enough space anymore
like memory leak, how memory heap of a javascript engine can overflow

//recursion - a function that calls itself
function foo(){
  foo() //recursion, keeps looping over and over, having a recursion, keep adding it over and over onto the callstack - stack overflow
}
foo(); //we just run our foo function

With synchronous task, if we have one function that takes up a lot of time, it is going to hold up the line 
- we need something non blocking 
  - JavaScript is a single threaded language that can be non blocking.
  
  
//Asynchronous - setTimeout
as synchronous is a predictable, we know what happens first, next, third, but it can get slow
asyn for tasks like image processing, making request over the network like API calls
talk between machines, speaking to database, making network requests, image processing, reading files
loading latest tweet - if you do synchronously, visitors to your site wont be able to do anything until tweets loaded which could cause long delay like forzen

console.log("1");
setTimeout(()=>{
  console.log("2");
}, 2000)  //wait 2 seconds
console.log("3");
//1 3 2(2 seconds later)

//JavaScript Run-Time Environment 
we need more than just js engine, we need js run-time environment (part of the browser)
on top of the engine, we have (browser gives us to use, not JS):
- Web APIs //(DOM(document), AJAX(XMLHttpRequest), Timeout(setTimeout)) callback()
- Callback Queue //(onClick, onLoad, onDone) callback()
- Event Loop  //keep check if the callstack is empty, if it is empty, then check callback(), if any, throw in callstack to do some work

console.log("1");
setTimeout(()=>{
  console.log("2");
}, 0)  //still go through the process - Web API, call back queue and event loop
console.log("3"); //log first than 1 since it does not need any additional procedures like setTimeout does
//1 3 2

//Synchronous vs Asynchronous - call your teacher with a question
synchronous
Synchronous way is you called the teacher, you wait on the phone until the teacher answers the phone
So you let the phone ring until he picks up, but you're not doing anything else.

asynchronous
asynchronous means you can leave a message to a teacher with a question and then wait for the answer
a callback tells you, teacher has a message for you when you are not too busy. 
calling back to let know that, there is some stuff waiting for you.
you can do something else in between (synchronously) while waiting for the answer (while other programs are running)
  
