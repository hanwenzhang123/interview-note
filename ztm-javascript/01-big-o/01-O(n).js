//instruction to find nemo in the array list
//big on notation is the language we use for talking about how long an algorithm takes to run
//when grows bigger and bigger with out input, how much does the algorithm slow down - the less it slows down, the better it is
//big o allows us and concerns us with how many steps it takes in a function

O(n) - linear time
as our number of inputs increase, the number of operations increased as well
big o depends on the number of inputs

//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

function findNemo(fish) {
//  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
//  let t1 = performance.now();
//  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo(large) //O(n)
    
//JavaScript Loops
//for loops
function findNemo1(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
}
  
//forEach
function findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Found NEMO!');
    }
  })
}
  
//for of
function findNemo3 = array => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}
    
