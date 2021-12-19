//Implementing An Arrya - build an array ourselves from the beginning
Array is like a = []; we can create our own data structure including array
Arrays in javascript are just objects with integer based keys that act like indexes

class MyArray {
  constructor(){
    this.length = 0;  //determine length of the array
    this.data = {}  //object, data within the array
  }
  
  get(index){
    return this.data[index];  //return the index of the data
  }
  
  push(item){ //take in an item
    this.data[this.length] = item;  //since we have 0 right now, here will be this.data[0] that contains the item
    this.length++;  //keep adding the array items
    return this.length; //return the length of the array
  }
  
  pop() { //delete the last item in the array
   const lastItem = this.data[this.length-1]; //we want the last item in the array, length-1 because 0 based
    delete this.data[this.length-1];  ///delete it
    this.length--;  //decrease the length
    return lastItem;
  }
  
  delete(index){    //why some operation in array are O(n)
    const item = this.data[index];  
    this.shiftItems(index);   //as soon as we start shift something, we change from O(1) to O(n)
    return item
  }
  
  shiftItems(index){  //start from the index we want to delete from
    for (let i = index; i < this.length-1; i++) {   //loop through the item, so O(n) operation
      this.data[i] = this.data[i+1];  //shift everything from the index to the left by one
    }
    delete this.data[this.length-1]; //we shift everything left over but we never get to touch the last item due to i < this.length-1
    this.length--;  //change the length
  }
}

const newArray = new MyArray();
//console.log(newArray.get(0)); //undefined because we have nothing in the object

newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);

console.log(newArray)   //you are nice

   
