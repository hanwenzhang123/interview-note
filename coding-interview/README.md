---
title: Coding Interview Basic Questions
---

## Table of Contents
- [Memoization](#Memoization)
- [String Reversal](#String-Reversal)
- [Palindromes](#Palindromes)
- [Integer-Reversal](#Integer-Reversal)
- [MaxChars](#MaxChars)
- [FizzBuzz](#FizzBuzz)
- [Array Chunking](#Array-Chunking)
- [Anagrams](#Anagrams)
- [Sentence Capitalization](#Sentence-Capitalization)
- [Printing Steps](#Printing-Steps)
- [Two Sided Steps - Pyramids](#Two-Sided-Steps---Pyramids)
- [Find The Vowels](#Find-The-Vowels)
- [Enter the Matrix Spiral](#Enter-the-Matrix-Spiral)
- [Fibonacci](#Fibonacci)
- [Queue](#Queue)
- [Underwater Queue Weaving](#Underwater-Queue-Weaving)
- [Stack](#Stack)
- [Two Become One](#Two-Become-One)
- [Lineked Lists](#Lineked-Lists)
- [Find the Midpoint](#Find-the-Midpoint)
- [Circular Lists](#Circular-Lists)
- [Step Back From the Tail](#Step-Back-From-the-Tail)
- [Building a Tree](#Building-a-Tree)

#### Memoization
```js
function memoize(fn) {
  const cache = {}; 
  return function(...args) { 
    if (cache[args]) { 
      return cache[args]; 
    }
    const result = fn.apply(this, args); 
    cache[args] = result;  
    return result; 
  };
}
```
[[↑] Back to top](#table-of-contents)

#### String Reversal
```js
function reverse(str) {
  return str.split('').reverse().join('');
}
```
```js
function reverse(str) {
  let reversed = ''; 
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```
```js
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
```
[[↑] Back to top](#table-of-contents)

#### Palindromes
```js
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
```
```js
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```
[[↑] Back to top](#table-of-contents)

#### Integer Reversal
```js
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
```
[[↑] Back to top](#table-of-contents)

#### MaxChars
```js
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
```
[[↑] Back to top](#table-of-contents)

#### FizzBuzz
```js
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
```
[[↑] Back to top](#table-of-contents)

#### Array Chunking
```js
function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
```
```js
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
```
[[↑] Back to top](#table-of-contents)

#### Anagrams
```js
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
```
```js
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
```
[[↑] Back to top](#table-of-contents)

#### Sentence Capitalization
```js
function capitalize(str) {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
```
```js
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
```
[[↑] Back to top](#table-of-contents)

#### Printing Steps
```js
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
```
```js
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
```
#### Two Sided Steps - Pyramids
```js
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}
```
```js
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
```
#### Find The Vowels
```js
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}
```
```js
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```
#### Enter the Matrix Spiral
```js
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
```
#### Fibonacci
```js
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}
```
```js
function fib(n) {
  if (n < 2) {
    return 2
  }
  return fib(n-1) + fib(n-2)
}
```
#### Queue 
- FIFO - First in First out
```js
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record); 
  }
  remove() {
    return this.data.pop(); 
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
```
#### Underwater Queue Weaving
```js
function weave(sourceOne, sourceTwo) {
  const q = new Queue(); 
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
```
#### Stack 
- FILO - First in Last out
```js
class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
```
#### Two Become One
```js
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
```
#### Linked Lists
```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(values = []) {
    this.head = null;
    for (let value of values) {
      this.insertLast(value);
    }
  }
  clear() {
    this.head = null;
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let counter = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (counter === index) {
        previous.next = new Node(data, node);
        return;
      }
      previous = node;
      node = node.next;
      counter++;
    }
    previous.next = new Node(data, node);
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index - 1) {
        if (node.next) {
          return (node.next = node.next.next);
        } else {
          return (node.next = null);
        }
      }
      node = node.next;
      counter++;
    }
  }
  getFirst() {
    return this.head;
  }
  insertFirst(data) {
    this.head = new Node(data, this.getFirst());
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
      return last.next;
    } else {
      this.head = new Node(data);
      return this.head;
    }
  }
  forEach(fn) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
```
#### Find the Midpoint
```js
function midpoint(list) { 
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next; 
    fast = fast.next.next;
  }
  return slow; 
}
```
#### Circular Lists
```js
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) { 
    slow = slow.next; 
    fast = fast.next.next;
    if (slow === fast) { 
      return true;
    }
  }
  return false;
}
```
#### Step Back From the Tail
```js
function fromLast(list, n) { 
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
```
#### Building a Tree
```js
class Node {
  constructor(data) { 
    this.data = data;
    this.children = [];
  }
  add(data) { 
    this.children.push(new Node(data)); 
  }
  remove(data) { 
    this.children = this.children.filter(node => { 
      return node.data !== data;
    });
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const arr = [this.root]; 
    while (arr.length) {
      const node = arr.shift(); 
      arr.push(...node.children); 
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);  
      fn(node);
    }
  }
}
```
