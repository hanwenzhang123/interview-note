interface Monarchy{
  void birth(String child, String parent);
  void death(String name)
  List<String> getOrderOfSuccession();
}

//void - what this function returns, here is not returning anything
//birth(String child, String parent) - take 2 arguments
//List<String> - return a list of string
//getOrderOfSuccession() - does not take any argument - return a list of string - based on the order of birth 

Monarchy Family Tree
            Jake
Catherine    Tom   Celine
Jane    Mark       Peter
Farah

new Monarchy("Jake")  //new instance then pass the king
birth("Cathrine", "Jake")
birth("Tom", "Jake")  //2nd child
birth("Celine", "Jake") //3rd child
birth("Jane", "Catherine")
birth("Peter", "Celine")
birth("Mark", "Catherine")
birth("Farah", "Jane")

//Monarchy Solution
class Person {
  constructor(name) { //what this person is going to receive when we instantiate any person node in tree
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king); //entry root node
    this._persons = { //using_, only our methods utilize (internal method)
      [this.king.name]: this.king //instantiate the instance of our person hash map
    };
  }

  birth(childName, parentName) {  //O(1)
    const parent = this._persons[parentName];   //where hashmap assign the parent object
    const newChild = new Person(childName);   //instantiate a new person with the child name

    parent.children.push(newChild); //push the new child to the parent.children
    this._persons[childName] = newChild;    //add the person 
  }

  death(name) {  //O(1)
    const person = this._persons[name]; //get the person at that name

    if (person === undefined) {   //if the person does not exist
      return null;
    }

    person.isAlive = false;   //flip the boolean isAlive to false
  }

  _dfs(currentPerson, order) {  //O(n) - n is the total number of the people
    if (currentPerson.isAlive) {  //if the person is alive
      order.push(currentPerson.name); //then push the person to the order
    }

    for (let i = 0; i < currentPerson.children.length; i++) {   //using a for loop to get each child
        this._dfs(currentPerson.children[i], order);  //use recursion to get the children 
      }
  
  }

  getOrderOfSuccession() {
    const order = [];
    this._dfs(this.king, order);    //pass the root node and the order array
    return order;   //return the order array when called the method
  }
}

const mon = new Monarchy('Jake');
mon.birth('Catherine', 'Jake');
mon.birth('Tom', 'Jake');
mon.birth('Celine', 'Jake');
mon.birth('Peter', 'Celine');
mon.birth('Jane', 'Catherine');
mon.birth('Farah', 'Jane');
mon.birth('Mark', 'Catherine');
console.log(mon.getOrderOfSuccession());

mon.death('Jake');
mon.death('Jane');

console.log(mon.getOrderOfSuccession());
