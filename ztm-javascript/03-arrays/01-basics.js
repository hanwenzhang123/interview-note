Array
like a list, organize item sequentially, one after another in memory
array is a great way to sorting data, memory in sequential order

Pros
- fast lookups
- fast push/pop
- ordered

Cons
- slow inserts
- slow deletes
- fixed size (if using static array)


lookup  O(1)  //fast
push    O(1)
insert  O(n)  //linear time
delete  O(n)


const strings = ['a', 'b', 'c', 'd']; //here stores for me
//4*4 = 16 bytes of storage

strings[2]  //c //herer grabs for me

//push - adding something at the end of the array
strings.push('e');  //O(1)  //just add we want at the end

//pop - remove the last item from the array
strings.pop();  //O(1)

//unshift - add something at the beginning of the array
strings.unshift('x');   //O(n)  //depending on the size of the array

//splice - starting index, delete count, item we want to add
//          goes to index of 2, add alien, and shift other things over
strings.splice(2, 0, 'alien');  //O(n/2) -> O(n)  - we did half of the operation, then worse case and simply to O(n)

console.log(strings)
 
