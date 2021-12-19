Hash Tables - great for quick access to certain value like in database
//(key-value pair)
objects - javascript
dictionaries - python
maps - java
hashes - ruby
//we see them a lot in database, in hashes, and they are extremely useful
//great when you want quick access to certain values

Arrays vs Hash Tables
//Arrays - each item placed next to each other on shell
search - O(n)
lookup - O(1)
push - O(1) can be O(n)
insert - O(n)
delete - O(n)

//Hash Tables - place all over the place
search - O(1)
insert - O(1)
lookup - O(1) or O(n) if collision
delete - O(1)


Hash Table Pros and Cons
//pros
- fast lookups  - good collision resolution needed
- fast inserts
- flexible keys

//cons
- unordered
- slow key iteration


basket.grapes = 10000
grapes is the property of the basket object
grapes is the key, 10000 is the value
we pass grapes to a hash function that comes a key into index where we store this value in our memory address


//Hash function
A hash function is a function that generates a value of fixed length for each input that it gets

We have a key that is grapes, we send it through a hash function that is going to hash something fast 
  and then map whatever the hash came out to be into a memory address where we want to store

We usually assume a time complexity as O(1) because this happens really fast


//Hash tables
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('Ahhhh!');
  }
}

user.age //54, O(1)
user.spell = 'abra kadabra';  //adding to the table, O(1)
user.scream();  //'Ahhhh!', O(1)


//Collisions
store different data values in the same location, you can do linked list

since we onstantly just keep adding to the same memory space, which slows down our ability to access or insert information, 
because if I want to check whats in this address space, I have to go one, two, three, four, five, and so on and so forth.
when we have a collision, it slows down reading and writing with a hash table 

O(n/k) where k is the size of your hash table
because we remove constance and simply things, it becomes O(n) operation
lookup may take O(n)
    
//New JavaScript
const a = new Map() //map
const b = new Sets()  //sets

with object, you can only save the key as a string
with map, it allows you to save any data type as the key, even function, arrays 
      it also maintains insertion order
      
sets are similar as map, the only different is that it only stores the keys, no values
      
       
