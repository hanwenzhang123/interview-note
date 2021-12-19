//Implement A Hash Table
class HashTable {
  constructor(size){
    this.data = new Array(size);  //size of the data
    // this.data = [];
  }
  
    //hash is very fast O(1)
  _hash(key) {    //put underscore - private access scope in JS
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length  //return an integer
    }
    return hash;
  }
  //const myHashTable = new HashTable(50);    //within the length of 50
  //myHashTable.hash('grapes');     //generate hash, and loop over "grapes"

  //just push it, O(1)
  set(key, value) {
    let address = this._hash(key);  //where we want to store the information, save the key to hashed address
    if (!this.data[address]) {    //if there is nothing in that address
      this.data[address] = [];  //everytime we push a new key value, we create a new array
    }
    this.data[address].push([key, value]);    //add this key value pair to data, push to the array
    return this.data;
  }

  //if no collision O(1), worse case with collision - O(n)
  get(key){
    const address = this._hash(key);    //get the address
    const currentBucket = this.data[address]  //get the current bucket for the key value pair in the one array
    if (currentBucket) {  //if this current bucket has something in it
      for(let i = 0; i < currentBucket.length; i++){  //we may have multiple items in the bucket
        if(currentBucket[i][0] === key) {   //the [0] is for they key
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
  
  //hash tables - we have to loop which is not as efficient as arrays, which object is not good
  keys(){    //allows us to loop/iterate all the keys in our hash tables
    const keysArray = [];
    for (let i=0; i<this.data.length; i++){
      if(this.data[i]){
          keysArray.push(this.data[i][0][0])  //first [0] remove the arra [], then second [0] for the key
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);    //the size of our data
myHashTable.set('grapes', 10000)    //key value pair
myHashTable.get('grapes')   //1000
myHashTable.set('apples', 54)    // we have both grapes and apples in the backet due to collision in only 2-size hash tables
myHashTable.get('apples')   //54
myHashTable.set('oranges', 2)
myHashTable.keys()  //grapes, apples, oranges


//Keys() without collision
 keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }
