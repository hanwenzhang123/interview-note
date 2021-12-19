//Stacks and Queues
Ther are all Linear Data Strutures, very similar
which allows us to traverse is go through data elements sequentially one by one
which only one data element can be directly reached
Difference - how data get to removed from the data structure

//only the beginnig and the end
unlike array, there is no random access operation 
run commands like push, peak, pop, which deal exclusively with the element at the beginnig and the end
less methods and less actions we can perform, which limit the use of the data structure

//Pros
- fast operations
- fast peek
- ordered

//Cons
- slow lookup


//Stacks
LIFO - last in first out, the last item that comes in is the first one that comes out
like stacking plates
  we have one piece data then another data stacked on top of each vertically
  can only touch the top plate, last one appears first
  good at modify last values: last edition history, broswer history, undo button

//Big O
lookup - O(n) //you do not want to traverse the whole stack
pop - O(1)  //remove the last item on the list
push - O(1) //add item to the last on the list
peek - O(1) //view the top of the last plate


//Queues
FIFO - first in first out
like entrance to roller coaster - a waiting line
  the last person that arrives in line gest to go first oon the rollercoaster and then the second person, and then third....
  the opposite of the stacks
  good use: wait list app like buying tickets for a concert, restaurant app checkin the table, uber and lyft request, printer
  in array, if you shift something (remove the first item), you are going to shift all the indexes

//Big O
lookup - O(n) //you do not want to traverse the whole stack, lookup usually do not do
enqueue - O(1)  //push, add the person to the line, add to the last
dequeue - O(1) //shift, remove person from the line, take the first
peek - O(1) //view the top of the last plate
   
