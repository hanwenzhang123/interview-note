4/29 Lisa Infoway (Shobana)
 
How to add multiple middleware, thunk for redux
Advantage of React
Limitations of React
Difference between function and class component
 
Coding:Calendar
 
import React, { useState } from 'react';
import Calendar from 'react-calendar';
function App() {
  	const [value, onChange] = useState(new Date()); 
const [value2, onChange2] = useState(new Date()); 
 
	count = () => {
		const start = new Date(value)
		const end = new Date(value2)
		const diff = (end.getTime() - start.getTime())/(1000*60*60*24)
		return diff
}
  	return (
    		<div>
      		<Calendar onChange={onChange} value={value}/>
			<Calendar onChange={onChange2} value={value2}/>
			<div>Count days:</div>
			<div>{count()}</div>
    		</div>
  	);
}
export default App
 
 
 
it“s only a front-end library, unlike Angular is a framework with a total system about web application
 
A JavaScript library for building user interfaces
	Main features
		it is component based / reuse component
		using JSX
		using virtual DOM - DFS 深度优先 node树
		using react lifecycles
		focus on view
#Advantages of React?
	1.
		Increases the application's performance with Virtual DOM.
	2.
		JSX makes code easy to read and write.
	3.
		It renders both on client and server side (SSR).
	4.	
		Easy to integrate with frameworks (Angular, Backbone, redux) since it‘s only a view library.
	5.
		Easy to write unit and integration tests with tools such as Jest, or react renderer.
 
 
 
 
4/28 Cara 
 
import css / inline styles / api className with styles / internal UI-Kit
 
 
yes， reused
how to create customized ui component:
 
create a functional or class component,and export,
when we use it we simply import it from the path.
 
style, import css files to the component,
or we can use inline styles， also  we can use style library
 
 
 
HOC， high order component
 
high order component is a function which take in a basic component,
and then return a customized new featured component
 
 
 
 
 
what is typescript
 
#TypeScript
	is an open-source programming language developed and maintained by Microsoft.
		It is a strict syntactical superset of JavaScript. strict syntax extension
 
后面都是和js的区别
你说你6years work exp on js， so it's eazy to handle typescript
	1. 
		TypeScript Code is Trans-piled into Plain JavaScript Code as for browser
	2. 
		JavaScript is TypeScript by changing the extension name from .js into .ts
		TypeScript supports JS libraries
	3.
		TypeScript is known as an Object-oriented programming language 
		whereas JavaScript is a scripting language.
	4.
		TS has static typing, which means variable types are known at compile time
 
 
 
 
 
webpack app or mobile app?
webpack one
React.js redux and js related 
work on react native before? No working exp, but I’m familiar with it.
Component based, native on mobile side.
component based front-end lib,
function with hook, class with lifecycle
what is react
	A JavaScript library for building user interfaces
	Main features
		it is component based / reuse component
		using JSX
		using virtual DOM - DFS 深度优先 node树
		using react lifecycles
		focus on view
props
 
hooks: useEffect, useState,
 
useEffect(fnc, []) // only once
为什么有second []， 
当第二个空的, state改变，就会useEffect,
此处是个空的array，所以只会被call一次
但凡有改变就会被call， 但凡有state改变或者props，每次rerender都会触发
Yes， I guess so
 
自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。 例如，下面的 useFriendStatus 是我们第一个自定义的 Hook:
 
import { useState, useEffect } from 'react';
 
 
function useFriendStatus(friendID) {
 const [isOnline, setIsOnline] = useState(null);
 
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
 
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
 
  return isOnline;
}

4/28 Jenna Client: Apple 面试官： Justin Gaerian
 
1. 
function Foo(x) {
 			var bar = function() {
				console.log(x)
 			}
  			this.baz = function() {
    				console.log(x)
  			}
		}
		Foo.prototype.buz = function() {
  			console.log(x)
		}
		var foo = new Foo('hi')
Answer:
		foo.buz(); // function not defined // correction: this.bar = bar in Foo
		foo.baz(); // 成功打印 hi
		foo.buz(); // x not defined 
// correction: this.x = x in Foo,console.log(this.x) in Foo.prototype.buz
 
2. There are 5 buttons. If you click button 1, it shows the number 1. If you click button 2, it shows the number 2. However, now no matter which button you click, it only shows the number 5. How to fix it?
 
 
3. Use Javascript, when you move the mouse close to the border of the sidebar, make the sidebar move according to the border.
 
let width = nav.style.width
let movable = false
 
 
if(Math.abs(evt.pageX-width)<10) {
	movable = true
}
 
BQ Questions
Tell me about what skills should an engineer have.
Tell me about a time you show innovations.
 
 
motivations,
communication,
patience,
interest in codes
 
innovation 创新性
有好主意，如何实现
 
4/28 Johnson Target: 面试官 stephen ed。。。没看全last name
Intro
Why do you choose that library, make that decision(related project)
ES6 new features
Rate JS 1-10
Weakness of React
Pure component
Closure, what and why use
Local and global state
 
 
4/27 Jenna Apple vendor
 
 
handleSort = (e) => {
  const key = e.target.innerHTML;
  // conditions, check if string
  // if string, do toLowerCase
  return data.sort((a,b) => a[key]>b[key])
}
 
const findLink = (array) => {
  const res = [];
  const x = (arr) => {
    arr.forEach(item => {
      if(item.link) {
        res.push(item.link)
      }
      if(item.type) {
        x(item.type)
      }
    })
  }
  x(array)
  return res;
}
 
 
 
difference between #function expression #function declaration 
	1.
		let fn = function() {} #expression
			do not hoist (var 处理function和variable的方式不一样)
			If you try to run a function before you expressed it, you will get an error
	2.
		function fn() {} #function declaration
			When a js file is loaded, 
				function declarations are hoist to the top
					before any code is executed
	3. 
		short hand => arrow function…
 
 
#Closure
	a function defined inside another function/block has access to the variable
	in three scope:
		1. its own scope
		2. parent function scope
		3. the global namespace
 
	In the most cases
		we return the child function
		and the returned function has full access to … 
		even though the parent func is no longer in the stack or destructed
 
 
setState will trigger rendering,
但是他问的是直接改变value
 
Redux-Middleware   #Middleware
	1.
		middleware is some code you can put 
		between the framework receiving a request, and the framework generating a response
 
Redux-Thunk #thunk
		redux原本是(pass)传递action (因为是 plain object，所以同步过程sync)
		redux-thunk 传递function类型的action
		通过回调 (return) 来控制触发plain obj as “action”，从而达到异步的目的
		A thunk is a function that wraps an expression to delay its evaluation. 
			allows you to write action creators that return a function instead of an action
 
initiate the component on the page
 
Yes
 
<Route
 path="/dashboard"
 render={(props) => <Dashboard {...props} authed={true} />}
/>

4/26 coinbase Frank
 
project 相关
challenge
complex bugs
autocomplete
form validation, submit
pagination
question: team size, tech stacks?
 
 
 
 
4/22 Apple Victor
const find = (users, tag) => {
	return users.filter(item => item.tags.include(tag)).map(item=>item.name)
}
你随便给个tag，打印一下，把 users 也输入进去
 
 
 
 
他说communication skill 很重要，更要多聊天了
聊聊工作中的例子。。。leading的例子，你的project怎么完成的，如何communicate with others
 
着重点应该是如何你工作中如何和别人communicate和co-work
workload， requirement changing什么的之前不都编好了么
具体一点，你的项目里某个target，
class vs function hook
which one you prefer， 优缺点
 
什么时候redux，什么时候不
 
passing from direct parents，with simple data structure，we prefer props
some data maitained by component itself for better rendering， we prefer states
其他时间都是redux
 
 
 
 
 
4/21 Enfec Cara (vendor: Vinay Kumar)
Fetch API
Redux Thunk
Diff between Typescript & ES6
If we have developed Typescript application and it is running on all browsers except in IE6 What is your approach?
Pure component
If we have API and it is OAuth enabled , How do you handle the OAuth layer?
 
//Write a program to pass values to child using context.
import React from "react";
const ThemeContext = React.createContext('light');
class App extends React.Component {
 render(){
   return(
     <ThemeContext.Provider value="dark">
     <Toolbar />
     </ThemeContext.Provider>
   );
 }
}
function Toolbar () {
 return(
   <div>
     <ThemeButton />
   </div>
 );
}
class ThemeButton extends React.Component {
 static contextType = ThemeContext;
 render() {
   return <button theme= {this.context} >{this.context}</button>;
 }
}
export default App;
 
 
 
4/19 Cara OA 
 
SIS_Inc_via_Codility_1
let s = "abacdec";
let distinctSubString = (S) => {
  count = S.length === 0 ? 0 : 1;
  S = S.toLowerCase();
  let letters = {};
  for (let i = 0; i < S.length; i++) {
    if (letters[S.charAt(i)]) {
      letters = {};
      count++;
    }
    letters[S.charAt(i)] = 1;
  }
  return count;
};
 
console.log(distinctSubString(s));
 
 
SIS_Inc_via_Codility_2
import React from 'react';
import { useEffect, useState } from 'react';
 
const USERS_URL = 'https://example.com/api/users';
 
export default function Table () {
    const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
const [last, setLast] = useState(0);
 
  const call = (n) => {
    setLoading(true)
    fetch(`https://example.com/api/users?page=${n}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false)
        setData(data.results)
        const count = Math.floor((data.count-1)/10)
        setLast(count)
        if(!data || count === 0 || data.results.length === 0) setLoading(true)
      });
  }
 
useEffect(() => {
    call(0)
  },[])
 
  const handleFirst = () => {
    call(0);
    setPage(0)
  }
 
  const handlePre = () => {
    call(page-1)
    setPage(page-1);
  }
 
  const handleNext = () => {
    call(page+1)
    setPage(page+1)
  }
 
  const handleLast = () => {
    call(last)
    setPage(last)
  }
 
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
           {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
          </tr>
        ))}
 
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={handleFirst}
        disabled={loading || page===0}>first</button>
        <button className="previous-page-btn" onClick={handlePre}
        disabled={loading || page===0}>previous</button>
        <button className="next-page-btn"  onClick={handleNext}
        disabled={loading || page===last}>next</button>
        <button className="last-page-btn" onClick={handleLast}
        disabled={loading || page===last}>last</button>
      </section>
    </div>
  );
};
 
 
 
 
 
Ashok Oa
 
1.CSS Statement(s)
	Media only screen and (orientation:landscape) {}
2.Select the void CSS command 
	H1 + p
	Li:first-of-type
	div*{background-color}
3.CSS attribute Selector
	a[href^=”#”]
	A[href]
4.Flex Box 	Alignment
	CSS columns have…..
5.Preload CSS
	In does not block the render of the page
6.
 
(F)In JavaScript, variables can be used without declaring in "use strict" mode.
(T?)In JavaScript inheritance, the classes inherit from each other rather than objects.
(T)In JavaScript, inheritance takes place by cloning the prototype of an object.
(T)In JavaScript $a,x, Y, _Z, With are valid variable names.


(F)var lang="Javascript"//line 1 lang= "Javascript"//line 2
Line 1 has a global variable whereas line 2 has a local variable.
 
(F)var lang="javascript"//line 1 lang= "Javascript"//line 2
Line 2 has a global variable whereas line 1 has a local vanable.
 
(T)JavaScript is an object oriented programming language.
//JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP). JS still oop.
 
(F)With Object.seal(), you can add new properties to objects, but you cannot delete its existing properties.
//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. 
 
(F)var a- Object seal(Object preventExtensions({"name": "John", "Age":21}));
The above syntax is error free.
 
7.In the global execution context (outside of any function), this refers to the global object whether in strict mode or not
8. Which js functions perform the given tasks….
	自己看 “zero” “one”
9.  42,28,24,28,42
10. Place <script>
	Just before the end of <BODY> tag
11. {a?:number, b:Object, c?: Array}
12. Garbage Colletor
	The property city is not remove from the variable but the garbage collector think its removed.
13.	The best known advanced services is the XMLHttpRequest object, which enables networking through scripted HTTP requests.
14.
15.
(T)There should be separate concerns for each server and client which will help to maintain the modularity within the application. This will also reduce the complexity and increase the scalability.
 
(T)The client-server communication should be stateless, which means no previous information is used and the complete execution is done in isolation. In cases of failure, it also helps the client to recover.
 
(T)In client-server communication, the HTTP response should be cacheable so that when required, a cached copy can be used which in turn enhances the scalability and performance of the server.
 
(T)Client-server communication should be done on a layered system. Thus the client should only have knowledge about the intermediate level with which communication is being done.
 
 
 
 
 
16. "application/x-www-form-urlencoded; charset=UTF-8"
17.
 
18.Syntax:
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
 
19.
20.
21.
22. Count Duplicate Element
  const findDuplicates =(nums)=> {
    let hash = {};
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] == undefined) {
            hash[nums[i]] = 1;
        }else {
            arr.push(nums[i]);
            hash[nums[i]] += 1;
        }
    }
    return arr;
}
 
24 When a typescript file is compiled, what is the configuration flag used to debug the compiled javascript and what is the output of the compiled code with such flag enabled?
 
Just add “sourceMap”: true, to compilerOptions in tsconfig.json. This will tell the compiler to generate .js.map files for us.
 
 
This is what a minimal version of tsconfig would look like.
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "build",
    "sourceMap": true
  }
}
 
 
 
 
Frank 4/18 vendor(OA)
1: 	
2: isPalindrome
3: removeDuplicate
4: position:static explain 
5: hide element
6: semi-transparent background
7: how to set font size of p right after h2
8: how to set font size of the first letter of paragraph without add any html
 
 
 
Cara 4/18 Vendor (约面试的是Anita女的/面试的是印度男的)
 
Background
 
client是Conns所以问了ecommerce相关经验
 
Last Project （related questions）
Component/features implemented during project（related questions）
Lifecycle
 
Jest & Enzyme
 
Middleware
 
ES6 features
 
给了个codesandbox：
https://codesandbox.io/s/movie-catalogue-react-fhnmc
问右边点击左边会换是怎么个过程
 
 
 
 Johnson 4/18 client: Enfec - T mobile
 
面试的时候watch your language
差不多这样， useEffect后面要加空array
该成这样
 
问他 就是只返回一个websorcket instance？
 
better not mix async/await with promise .then.catch
 
pass valid url assert the correct instance is returned
 
pass invalid url assert the correct instance is returned
 
 
pass null assert error is reject
 
 
use try catch
 
ok,说你想一下
先这样，我不确定他是不是要这个意思


他给定的是async function
可以await直接return默认promise么
 
 
test no array
test array length less than 2
test all negative numbers
 
test all positive numbers
 
test all zeros
 
we assume we won’t pass other things
 
or we can use typescript to avoid that
 
we should also check that
 
check the type of the input, if it is not array, then return null
用Array.isArray这个function

     
可以在function上面加comments 声明参数类型
 
排序 比较前两个值的乘积 和 最后两个乘积值
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
what's CSS Specificity?
specificity is a process of determining which CSS rule will be applied to an element. it actually determines which rules will take precedence.
precedence(优先级为): !important >inline style> #id > .class > tag > * >继承 > 默认 
when the weight of selector are same , it will apply the closet css rule.(就近原则)
universal selector (*) has no specificity.
 
 
 
Dominic 4/12 Client: Nomura
1: jQuery and React
2:  Using React as base
3: hook?class component? 
4: what hooks have you noticed? con
5: context, yes
6: Use effect: lifecyle, dependency array
7: useEffect, useMemo
8: redux, store
9: two input of the action
10: Reducer and actionmei
11: Mutable and immutable
12:  redux state in reducer
Using spread operation to copy the current state and change the state, 
Return { …state, [name] : value}
 
13: Shallow and deep copy
Shallow: copy reference
Deepco: copy the object into a new object
 
14: How to access the store in view?mapdispatchtoProps, mapstatetoprops
15: mapdispatchtoProps in hooks => usedispatch
16: es6, feature
17: const a = 1, 
TypeError: Assignment to constant variable.
 
18: middleware 
 
19: Map and set
Map is a collection of elements where each element is stored as a Key, value pair.
Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
 
20: material ui, bootstrap
21: highOrderComponent
 
Step 1: Recognize a pattern.
Step2: Put the common parts in a function.
Step 3: Make the different parts parameters of that function.
22: useEffect
useLayoutEffect. The signature is identical to useEffect , but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.
23: how to prevent memory  leaks
 Also Using AbortControllers in your web apps can help improve performance and prevent memory leaks
24: how to use unmount in functional component 
If you add a return function inside the useEffect function, it is triggered when a component unmounts from the DOM. 
25: write react from scratch, best practice 
26: error handle in react
Error handling with Error Boundaries — For class components. Error boundaries are the most straightforward and effective way to handle errors that occur within your React components
 
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
 
 
Error boundaries do not catch errors for the following events: Event Handlers. Asynchronous code(Example request Animation Frame etc) Server-Side Rendering.
 
27: how to handle data getted from server,  large amount of data
Ways to render large amount of data
 
Pagination. Pagination allows you to render data in pages as opposed to rendering all the information at once. ...
Infinite scroll. ...
react-virtualized. ...
react-window. …
Lazy loading is the practice of delaying load or initialization of resources or objects until they're actually needed to improve performance and save system resources.
 
28: localStorage and sessionStorage
 
29: websocket 
WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection
 
 
30: optimized app
Increase Performance 
use pure component 
PureComponent automatically implements the shouldComponentUpdate() lifecycle method.
 
let React know if a component’s output is not affected by the current change in state or props.
avoid re-rendering cycles of the component when its props and state are not changed,
use react lazy
loading components only when we really need them
page will be faster because initial loading only deals with smaller chunks. Less JS means our initial loading of our app is fast.
minifying CSS and Javascript
avoiding blocking Javascript
Reduce number of api call => massive data, lots of api calls, 
 
 
 
31: Webpack is a tool that lets you compile JavaScript modules, also known as module bundler. Given a large number of files, it generates a single file (or a few files) that run your app. It can perform many operations: helps you bundle your resources
 
For build purpose.
32: Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript.
 
33: Hoisting 
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
 
34: prototypical inheritance
prototypical inheritance refers to the ability to access object properties from another object.
 use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
 
35: Null and undefined 
 
undefined means a variable has been declared but has not yet been assigned a value
null is an assignment value. It can be assigned to a variable as a representation of no value:
 
36: 2+ “2”
22 => string
 
37: array method have used
 
38: html css or from other team
 
Start with an HTML file that contains an embedded style sheet
Create a new file and save it as StyleSheet.
Move all the CSS rules from the HTML file to the StyleSheet
Remove the style block from the HTML file
 
 
39: Meta arritbute
Used for SEO
The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.
<meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.
Metadata will not be displayed on the page, but is machine parsable.
Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.  Used for SEO
There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).
40: viewport
The viewport is the user's visible area of a web page
The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
41: model box
42: pseudo selectors types in css
43: position attribute
44: visibility
 
visibility: hidden hides the element, but it still takes up space in the layout. 
display: none removes the element completely from the document
opacity: 0 will affect child elements.`
45: how to implement routing in react
46: last proj, what have you done, what have you contribute
 
 
Johnson 4/8 面试官：Sebastian
// sliding window 这个不好解释，leetcode hard难度的，总的来说，就是给一个start位置，一个end位置，然后追踪，如果XXX情况，start就右移一位，XXX情况，end就右移一位，然后具体结合以下绿字来说
const minWindow = (s, t) => {
  const count = {}; // Count of chars in t to be used
  const res = [-1];
  for (let c of t) count[c] = (count[c] || 0) + 1;
  let start = 0, end = 0, numLeft = t.length;
  
  while (end < s.length) {
    if (count[s[end]] > 0) numLeft--; // Can use char s[end] (decrement numLeft)
    count[s[end]]--; // Update count
    end++; // Keep checking
 
    // Window is valid
    while (numLeft === 0) {
      // Window is smaller
      if (res[0] === -1 || end - start < res[1] - res[0]) {
        res[0] = start;
        res[1] = end;
      }
      count[s[start]]++; // Update count (1 char (s[start]) is no longer used)
      if (count[s[start]] > 0) numLeft++; // Still need to use char s[start], update numLeft
      start++; // Keep checking
    }
  }
  return res[0] === -1 ? '' : s.slice(res[0], res[1]);
};


Location
Experience about react
Experience about SSR(server side rendering)
#SSR #server-side-rendering   灰色的图片，占好了格子，第一次打开的速度
Hooks? 
useState, useEffect
context 
create provider to provide state management for each component
shadow dom
 
The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. 
Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM
responsive layout (RWD AWD)
 


 
Frank infoway 4/8 面试官：Madhu shankar
 
1.hooks: useState, useEffect
2.async/await: sugar for Promise, async process
3. Promise
4. What is graphQL
 
1.
			asynchronous programming 异步 
			fetch data
		2.
			Promise is in one of the 3 states:
				pending -> fulfilled/resolve
				pending -> rejected
			When executed function completed, promise will return an obj (promise with new state)
				to allow you do the next step
 
graphQL is for api calling
 
 
 
 
Jenna 4/8 walmart(from streamlinity) 2nd round(client 1st round)
 
import {useState} from 'react';
import './App.css';
 
 
function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
 
  const handleChange = (e) => {
    setInput(e.target.value)
  }
 
  const handleClick = () => {
    const date = new Date()
    setList([...list, {input,date}])
  }
 
  const handleDelete = (e) => {
    const value = e.target.value
    const newList = list.filter((item,index) => 
      value !== item.date
    )
    setList(newList)
 
  }
 
  const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return month + '/' + day + '/' + year;
  }
 
  return (
    <div>
      <table>
        <h1>TODO</h1>
        <input value={input} onChange={handleChange}/>
        <button 
          onClick={handleClick} 
          style={{"backgroundColor": "green"}} 
        >
          Add
        </button>
      
        <tbody>
          {list?.map((item,index) => {
            return <tr style={{"display": "flex"}} key={item.input+item.date+' '+index}>
              <td><input type="checkbox" style={{'marginRight': '10px'}}/></td>
              <td style={{'marginRight': '10px'}}>
                {item.input}
              </td>
              <td>{getFormattedDate(item.date)}</td>
              <td>
                <button 
                  onClick={handleDelete} 
                  value={item.date} 
                  style={{"backgroundColor": "green"}}
                >
                  Delete
                </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
 
 
export default App;
 
 
 
 
table {
  border: solid black 1px;
}
 
tr:nth-child(2n+1) {
  background-color: grey;
}
 

Johnson 4/7 enfec vendor call
Introduce
2. use Typescript or JS?
3.advantage of redux
	4. Have you use hooks in your project? Explain it.
	5. Have you use sage?
6. Difference between dispatch state?
7. Typescript vs es6?
8. What??没听清楚
9. coding ： fetch api， use redux to write
An input and an submit button, when you enter user Id in the input box and click the submit button, it should show users email and user name.
Follow up: user only has 1-10, add input validation.
Solution: https://codesandbox.io/s/enfec-redux-9g8dwg?file=/src/moudle/index.js
 
 
Jason vendor call 04/06 vendor: Rajesh
 
Intro: background. 
Q: Pair program concept ? pair programming for mentoring other devs? Me as the ui lead?（后面查了是pair programming)
1, Onboarding, I often do the mentor for new teammembers. wE HAVE A onboarding list to complete for the new members. Normally this will be 2-4weeks, and new devs will become familiar with that. 
2, Frontend concept
Q: what u did with react A: can answer with last project intro. (project details)like some component u created. Introduce the component.
Q: Angular vs react. Different data type. Angular is 2 way binding data, react is 1 one data. We can also do local state if app is a lighter one. (no need to do the 
Often we have all states stored with reducer/store, and 1 way data change is react using the reducer, with actions, also called as single source of truth (principle of redux)
Q: how to Achieve data change of the view, when user interact with the web ?
A: Using local state. setState,
 
Q: Describe an event of React
onChange = (e) => {
}
<Button onClick={this.onChange.bind?} />
 
Q: security issues exp ? A: session timeout, xss attack, cookies timeoutlidations, 
Q: tell differences between class component and functional component?
Q: processor exp with css ? advantage ? A: SASS & SCSS .sass .scss (color theme)

Johnson vendor call 04/06
 
我这里完全听不见他说啥
跟他打电话的话可以尝试，重复他的问题，比如 ƒwalma
Is your question about XXX ,right?
Im I understanding you correctly, XXX ?
 
 
 
 
Elliot 04/05 Apple 面试官：YUHUA HE. Vendor: Sri Rama Uppalapati
 
你要把promise的res放进setTimeout里，一开始那里写错了
将下图的2个await 写成const res = await Promise.all([p(0),p(1)])

 
Promise.all takes an array of promise objects
So we have to wrap all the fetch calls in an array in the form of promise and then call promise.all
 
// const makePro = (func) => {
//     return new Promise(res => func(res));
// }
 
// const promiseArr = db.map(
//     (data, i) => makePro(res => fetchData(res, i))
// );
 
// Promise.all(promiseArr).then(responses => {
//     responses.forEach(res => console.log(res)) // or handle function
// })
const x = (arr1, arr2) => {
	return arr1.concat(arr2).sort(
		(a,b) => Number(a)-Number(b)
)
}
 
 
 
 
flex box
 
container 
display: flex
direction: column
container里面有header和content和footer
 
你里面有足够的内容才会scrollable
或者你要有定义好的高度，才能让它扩充到足够的大小。
 
grid system
 
content -> 
overflow: scrollable
header ->
	position: 前者sticky后者可以用flexbox或者grid直接布局就好
header需要时刻保持在viewport的最上层，还是说page的最上层？
 
Grid 有content-justify and etc?????
有要求一定要grid么 为什么不用flexbox
 
 
 
 
A B will select any B that are inside A, even if there are other elements between them.
A+B will select B after A
A, B will select BOTH A and B
AB will select className = “A B”
 
2nd A B will select any B that are inside A, even if there are other elements between them.
<...className=’b’>
		<...className=’a’></>
</>
 
3rd AB will select className = “A B”
	<...className=’a b’></>
 
4th A, B will select BOTH A and B
	A和B都选中，平行的
 
 
 
 
 
project related…
 
#accessibility
	1.aria
		e.g. 
			<input aria-label={labelText}></input>
			aria-label 给此element一个label，可以被voice loader读出来
	3.
		tabIndex
	4. 
		$('#link').focus()
	5.
		Alternative Text
			<img src="img_chania.jpg" alt="Flowers in Chania">
 
 
 
 
 
 
 
 
Dominic 04/05 vendor call
Jest
Enzyme
 
Do you ever implemented api using node? ???  mainly focus on front-end side
 
Function component has hooks to allow the developer to using state and lifecycle method
Easier to write and debug
 
Customer point view? Hooks improve the performance of the web application 
Which means the
Better user experience
 
 
Increase Performance 
I will use pure component because PureComponent will automatically implement the shouldComponentUpdate() lifecycle method for you. It will compare the current state and props with previous one. It will help to avoid re-rendering cycles of the component when its props and state are not changed,
use react lazy loading, it will loading the components only when we really need them, so the page will be faster because initial loading only deals with smaller chunks. Less JS means our initial loading of our app is fast.
I will try to minifying CSS and Javascript and avoiding blocking Javascript
I will try to Reduce number of api call => massive data, lots of api calls, 
 
 
Both 
Axios and fetch
Yes promise and async and
It depends if the data is needed immediately
So if we need to use the data right after the fetch
We can use async await
 
Performance
 
Yes
Redux & flux
 
 
The primary difference of Flux vs Redux is that Flux includes multiple Stores per app, but Redux includes a single Store per app. Rather than placing state information in multiple Stores across the application, Redux keeps everything in one region of the app
 
React native
E-commerce project
 
What’s the next step
 
 
 
 
Johnson 4/4 vendor call akanksha.vings
Location
Total experience
Any experience with backend?
Any experience with python and java?
Which frontend skill tech do you use?
