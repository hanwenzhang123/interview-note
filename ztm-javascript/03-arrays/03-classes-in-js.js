//reference type
Objects are what is called the reference types in JavaScript
Arrays are objects

var number 1 = 1
var number 2 = 1

var object1 = {value: 10};  //box1
var object2 = object1;    //same as object1 - box1
var object3 = {value: 10};    //box3

object1 === object2   // true
object1 === object3   // false
object1.value = 15  //assign object1 value 15
object2.value //15, same as object1
object3.value //10 not being affected by the change, it is independent


//context vs scope {}
function(){ //a new scope in that {} block
  let a = a;  //lives in this universe
}

console.log(this) //this is the window object
console.log(this === window)  //true
this.alert("alert") //same as window.alert()  'this' refers to the object it is inside of

function a(){
  console.log(this);
}
a() //window object, same as window.a()

const object4 = {
  a: function(){
    console.log(this); //'this' is the object4, it is within the scope
  }
}
object4.a() //this is for the object4


//instantiation
- you make a copy of an object and reuse the code
- you are making instances, multiple copies of the objects

class Player {
  constructor(name, type){  //everytime make a copy, the first thing it gets run is the constructor
    this.name = name;
    this.type = type;
  } //this constructor function is going to create these properties on the player object
  
  introduce(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`); //using this, we access to the property within the constructor
}
  
class Wizard extends Player {     //I want Wizard to have whatever the Player class has
  constructor(name, type){
    super(name, type)   //access to the property in the Player function, super always on the 1st line
  }
  
  play(){
    console.log(`WEEEEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');   //new keyword creates a new Wizard
const wizard2 = new Wizard('Sean', 'Dark Magic');
  

//Classicla Inheritance
var player = function(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function (){
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard2 = new Player('Sean', 'Dark Magic');

wizard1.play = function(){
  console.log(`WEEEEEE I am a ${this.type}`);
}

wizard2.play = function(){
  console.log(`WEEEEEE I am a ${this.type}`);
}

  
