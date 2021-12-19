Rule 1 - Worst Case Senario

Rule 2 - Remove Constants
O(2n) - O(n)
O(n/2) - O(n)
//they are linear

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {   //O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { //O(100)
        console.log('hi');
    }
}
//O(1 + n/2 + 100)
//O(n/2 + 101)
//O(n/2 + 1)   //we only care about the things we see on chart, nothing specific, so here we turn into 1
//O(n + 1)  //we only care about when it scales, when the input gets larger and larger, divide by 2 has decreasingly significant effect, so we drop it
//O(n)   //since 1 is insignificant, we drop it

function compressBoxesTwice(boxes) {
   boxes.forEach(function(boxes) {
      console.log(boxes);
   });
   boxes.forEach(function(boxes) {
      console.log(boxes);
   });
}
//O(2n)
//O(n)  //drop the constants


Rule 3 - Different Terms for Inputs
//make sure to know that we have different arrays that mean different notation for each array because we do not know the lengths
//easy rule - any step that happens in the same indentation, so one after anoteher, you add
//          - anything that happens with indentation that is nested, you multiply

function compressBoxesTwice(boxes1, boxes2) {
   boxes.forEach(function(boxes) {
      console.log(boxes);
   });
   boxes.forEach(function(boxes) {
      console.log(boxes);
   });
}
//O(a + b)   //for 2 different inputs(arrays) for the parameter, we can also do like O(boxes1 + boxes2)
//O(a * b)  //if the loops are nested, they are not one after another

//different input should have different variables


Rule 4 - Drop Non Dominants
function printAllNumbersThenAllPairSums(numbers){
    console.log("these are the numbers: ");
    number.forEach(function(number) {   //n
        console.log(number);
    });
    
    console.log("and these are their sums: ");
    number.forEach(function(firstNumber) {    //n^2      //adding one after another
        number.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}
//printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

O(n^2) <- O(n + n^2) because we only keep the dominant term 
                    we only worry about the most important dominant term
  
O(x^2+3x*100+x/2) -> if x is 5, dominant term is 100, 
-> O(x^2) -> but we worry about scale when x gets larger and larger
-> we only care about the most important one

if we have 3 nested layers -> O(x^3) 
  
  
//O(n!)
O(n!) - factorial time - oh no!
   the worst and most expensive one, you will most likely not encounter it!
