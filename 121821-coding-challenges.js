//mthree coding challenges

1.
```
https://www.codingame.com/training/expert/the-lucky-number
A lucky number is a 10-based number, which has at least a "6" or an "8" in its digits. 
However, if it has "6" and "8" at the same time, then the number is NOT lucky. 
For example, "16", "38", "666" are lucky numbers, while "234" , "687" are not.
Now we want to know how many lucky numbers (without leading zeroes) are there between L and R, inclusive?
```

2.
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

3.
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

1.
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
