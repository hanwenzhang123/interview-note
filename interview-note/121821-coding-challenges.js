//mthree coding challenges

//1.
```
https://www.codingame.com/training/expert/the-lucky-number
A lucky number is a 10-based number, which has at least a "6" or an "8" in its digits. 
However, if it has "6" and "8" at the same time, then the number is NOT lucky. 
For example, "16", "38", "666" are lucky numbers, while "234" , "687" are not.
Now we want to know how many lucky numbers (without leading zeroes) are there between L and R, inclusive?
```

//2.
```
https://www.codingame.com/ide/puzzle/the-fastest (50 pts)
The program:
Your program must judge results of marathon runners and choose the best one.
The result of each runner is represented as HH:MM:SS, where HH is hours, MM is minutes and SS is seconds.
You are given N results and the smallest time is the best.
INPUT:
Line 1: a integer number N.
Next N lines: 8 characters, a time result.
OUTPUT:
The best result.
CONSTRAINTS:
0 < N ≤ 10
0 ≤ hours < 24
0 ≤ minutes < 60
0 ≤ seconds < 60
```

//3.
```
Write a class limitedqueue which will implement a limited queue of objects. 
The queue is just a normal queue that can accept up to N elements only. 
If any elements go beyond the limited N of the queue each additional item accepted will make the oldest element be removed. 
I have to include a constructor, add, remove, getLimit and size methods.
Constructor accepts int n which determines our limit
add will accept an object to add to the end of our queue after removing an object if necessary
remove must remove the oldest object from the queue and then return that element
size must return the number of elements in our queue
getLmit must return the maximum number that our queue can hold.
This must be done in Java if possible.
```


//loom coding challenges
- What is a RESTful API and what are its advantages?
  RESTful API provides a set of tools that allows us to build apps via HTTP requests through the CRUD operations.

//1.
```
String Challenge
Have the function StringChallenge(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00, 
and convert this rating into a list of 5 image names to be displayed in a user interface to represent the rating as a list of stars and half stars. 
Ratings should be rounded to the nearest half. There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg". 
The output will be the name of the 5 images (without the extension), from left to right, separated by spaces. 
For example: if str is "2.36" then this should be displayed by the following image:

Input: "0.38"
Output: half empty empty empty empty
Input: "4.5"
Output: full full full full half
```
function StringChallenge (str) {
  const rating = Number(str);
  const remainder = rating % 1;
  let completeStars = Math.floor(rating - remainder);
  let hasFractionalStar = remainder >= .25 || remainder < .75;

  const result = [];
  for (let i = 0; i < 5; i++) {
    if (completeStars) {
      result.push('full');
      completeStars -= 1;
    }
    else if (hasFractionalStar) {
      result.push('half');
      hasFractionalStar = false;
    } else {
      result.push('empty');
    }
  }

  return result.join(' ');
}
   
// keep this function call here 
console.log(StringChallenge(readline()));

//2
```
For this challenge you will determine whether HTML elements are nested correctly.
Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. 
The elements that will be used are: b, i, em, div, p. 
For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.
If a string is not nested correctly, return the first element encountered where, 
if changed into a different element, would result in a properly formatted string. 
If the string is not formatted properly, then it will only be one element that needs to be changed. 
For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div 
because if the first <div> element were changed into a <b>, the string would be properly formatted.

Input: "<div><div><b></b></div></p>"
Output: div
Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
Output: i
```
function StringChallenge(str) { 
  let a = str.split("<").join("");
  let b = a.split(">");
  let result;

  for (let i = 0; i <= b.length; i ++) {
    let temp;

    if(b[i]){
        if(b[i].includes("/")){
          let counter = 1;
          temp = b[i - counter];
          if(b[i].includes(temp)){
            counter++;
            result = true;
          } else if (!b[i].includes(temp)) {
            counter++;
            result = temp;
            return result
          }
        }
      }
    }
  return result; 
}
   
// keep this function call here 
console.log(StringChallenge(readline()));


//zippity coding challenges
//1. Class-based Component - Color Picker
//2. Functional-based Component - Customer List
//3. Powers of 2
function isPower(arr) {
    // Write your code here
    let tempArr = [];
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){   //arr[i] && (arr[i] & (arr[i] - 1)) === 0
            tempArr.push(0)
        } else {
            tempArr.push(1)
        }
    }
    
    return tempArr;
}

//12/14/2021 - Easy Hundred
Please briefly answer the following questions in English.

1. What are the advantages of React Native over native IOS and Android?
React Native is available for both IOS and Android devices. 

2. Lifecycle of React Native components
 (3 phases) - mounting, updating, unmounting

3. What is the function of useState() under Hook?
const [state, setState] = useState(“initial value”)

4. The similarities and differences between props and state
both are immutable, read only. 
state is an object internally captured by class (in the constructor, this.state). 
props down, parent talks to child

5. what method would call during the update and end of Hook? 
useEffect(() => {}, []);

6. If you use the props.children.map function of reactJS to traverse, you will receive an exception prompt. Why? How should it be traversed?
you need to key each item an unique key when using map()

7. Please describe the process of Redux state management
redux is a library for state management, it controls in a single object - store; no matter how deep you are, no needs for lifting state up

8. Please describe the mechanism of loading bundles
use lazy loading to improve the page loading speed.

9. Why did the data not trigger render when you dispatch an object into Redux action? How to fix it?
need to trigger reducer, use destructuring to check object

10. Flex layout
With a parent element set to flex, all direct child elements in the container automatically become flexible items.

10.1. What is the purpose of specifying flex Direction in the component style ?
-  all flex items in one direction, row or column

10.2. What is the purpose of specifying justify Content in the component style?
- layout based on main axis

10.3 The style of two sub-components arranged horizontally even, and the style of two sub-components vertically centered 
display: flex;
justify-content: center;
align-items: center;

11. What is the biggest difference between synchronous action and asynchronous action in Redux
can use thunk to accomplish asynchronous action in redux

12. The principle of React PureComponent
performance improvement, to compare current props and previous props to make sure it cuts off unnecessary renders

13. What does ReactNative use to call native (IOS/Android) methods?
bridge

14. In JS, how to empty an array?
array.length = 0;
array.splice(0, array.length);

15. In JS, how to check if it is an array?
Array.isArray() - return boolean, check whether an object (or a variable) is an array or not.

16. What is the biggest difference between JS =>function and general function?
arrow function does not have its own this to be referred to the current object

17. In JS, how to understand the use of Await/Promise ?
JavaScript is a single threaded language so we can use await/promise to do asynchronous tasks.

18. Please use a most simple JS code to define 4x5 String arrays
const example = [
    [‘a’, ‘b’, ‘c’, ‘d’],
    [‘e’, ‘f’, ‘g’, ‘h’],
    ['i’, ‘j’, ‘k’, ‘l’],
    [‘m’, ‘n’, ‘o’, ‘p’],
    [‘q’, ‘r’, ‘s’, ‘t’]
];
example[4][3]	//t
19.Please use the simplest way to convert the characters below and remove the repeat characters.  “Hello world”
"Hello World".split('').filter((word, index, string) => string.indexOf(word) === index).join("")

20. Please use JS to write a code to make  [1,2,3,4,5,6,7,8,9,10] to [[2,4,6,8,10] ,[1,3,5,7,9]].
const number =  [1,2,3,4,5,6,7,8,9,10];
function doubleArray(array){
const arr1 = [];
const arr2 = [];
const temp = [];
for (let num of array) {
   if(num % 2 == 0) {
      arr2.push(num)
   } else {
      arr1.push(num)
   }
}
temp.push(arr1, arr2);
return temp;
}
doubleArray(number)

21. Please use JS to write a code to deepMerge two objects.
  
