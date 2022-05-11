Bucky 3/31 apple -waseen_malik?
这个之前victor面过
 
首先求所有数字的乘积 4x2x3x1x4 = 96
然后遍历每一位 用96/（当前数字） map return 就好了
 
 
const myMul = (arr) => {
    const mulSum = arr.reduce((x, y) => x*y, 1);
    return arr.map(a => mulSum/a);
}
 
 
Leetcode 238 原题

A question, is it necessary to load all comments at once?
Can we load specific numbers of comments per click, on ClickForMore option
Or NextPage PaginationComponent to improve performance.
Hence we may need a connector Component, something like Pagination or ExpandForMore
 
 
⬇️
 
6:
Blogging site, add comment feature
 
We need some api to post the data to the server to save the comment
And also an endpoint to get the comments already in the server
 
Then we can create a component to display all the comment we have 
 
And another component to allow the user to input their comment and submit button
Once they click the submit button
It will trigger the post/put call to save their comments in the server
 
 
First i will have a component to list out of the comments=> commentList
Display all the comment saved in the server
ComponentDidmount / useEffect    
have a state variable( ) after getting the data will save it to the state
 
Component state, or we can using redux if the application layer is complicated
 
 
We can using .catch once the api call is failed 
 
 
We can using map to map over the data 
Like using map to create <li> to display all the comments
For example, we can show 10 comments, and have some paginations to allow the user to view more comments
 
 
Then the comment input field  => commentField  has input fields and the submit button
 
7: how to pass data from parent component to child component
Using props
Props is used to pass data from parent to child 
 
8: Can you change the value passed from parent component? 
We can use the callback function which is  passed as props, to change the value of the variable store in parent. 
 
 
 
 
 
 
 
 
 
 
 
 
 
Johnson 3/31/2022 APPLE
Background:
Introduce
The most challenging part of the project(tech challenge).
What kind of pagination, any library, format
What difficult are you facing when implement the navigation/pagination
Node.js
Aws?
How to connect with backend
The backend developer will provide the api endpoint, we can using axios to fetch the data using GET/POST
{name: “name”} vs {“name”: “name”} what are those ?
Where to use json, where to use js object. 
React router to do navigations
Two sum
Leetcode Q1 with result in an array
Increase Performance
Array 1 to 10
If the sum of the all element if equals to a target number
 
Two sum
 
Brute force solution is to have 2 for loop to go over the array two times
And then finds out if there are 2 two numbers adds to the target
 
 
Leetcode Q1 with result in an array.
 
 
The first solution is o n^2, it’s not the best approach 
Const test = (nums, target) =>{
    let targetDic = {} //We can create a object
	Let result = []
    for(let i = 0; i<nums.length;i++){ //  for loop go over the arr
        if(targetDic[nums[i]]==undefined) // if the key is not found in the obj
            targetDic[target-nums[i]] = i 
// add it to the obj with key = target minus current number,
// the value will be the current index 
 
//if the result[arr[i]] exist, which means there is a combination of two number added together will be the target
        else
            result.push [arr[targetDic[nums[i]]],arr[i]]  // 就之前是return index，现在是直接return的value 
		// if the key exist which means current number have a paird number 
// which will add it to the target number
// so we can just return it. 
    }
 
Return result
 
Line 11 return 改掉
    
};
 
For my past project
Using useState when to store the state variable, and update that particular variable
 
In functional component
We cannot having state inside of it
Hook allow me to using state and lifecycle method in functional component 
 
 
Hooks is used to create state variable to store data for late use in the component
We can just hit the api once then keep using the data
otherwise everytime we want to use the data we have to call the api
Increase amount api call slows the performance of the application
 
Easier to read and write
It based on the project is using class component or functional component 
 
Basically in the front end side we are hitting the endpoint to get the data
What data will be send back to the client is based on the requirement 
The backend developer will provide a data schema will look like, so the front end can code according to the schemas. ?  
 
If the api is still in developing, i will using some hard code data to test the front end ui. And the hard coding data will be in the same data schema backend provides. Let the backend developer 
 
 
Webserver 还是啥的我名字忘了救救我，可以local mock call
 
Experience in system design, architecture design
What you can contribute as system designer???
 
Search app to increate performance
 
Increase Performance 
I will use pure component because PureComponent in React will automatically implement the shouldComponentUpdate() lifecycle method for you. It will compare the current state and props with previous one. It will help to avoid re-rendering cycles of the component when its props and state are not changed,
use react lazy loading, it will loading the components only when we really need them, so the page will be faster because initial loading only deals with smaller chunks. Less JS means our initial loading of our app is fast.
I will try to minifying CSS and Javascript and avoiding blocking Javascript
I will try to Reduce number of api call => massive data, lots of api calls, 
 
With large volume of data and numbers of api call, the whole applications will be slow or even blocked by some of the api calls. So one of my major responsibility is to determine the necessary calls for that page and remove the unassuaged calls, in this way the performance of the application can be improved
 
 
 
 
 
Use Postman to mock a call, curl link is provided by back end team.
Usually for my team, I don't have to do that locally. I simply point my local dev env to a prod env to get prod api services.
Meeting with back end team and inform them about desired state structure and when both teams land on agreement, first use mock data, following the schema to do testing
 
Make sure the api schema is designed as expected, so as front end developer we know what to expect to render properly on the front end. 
 
We group the functionality based on what it does instead of when it happens
Also shorter syntax and neater code blocks. Last but not least, hooks will overall improve the component rendering efficiency using its internal mechanism
 
 
 
 
 
小Bucky：
var twoSum = function(nums, target) {
    const result = [];
    for(let i = 0; i < nums.length; i++){
        const tmp = target - nums[i];
        console.log(tmp);
        if(result.includes(tmp)){
            return [nums.indexOf(tmp), i];
        }else{
            result.push(nums[i]);
        }       
    } 
};
 
 
 
 
 
 
 
Cara 03/31/2022 infoway
Functional vs class component
What is reducer
ES6 feature
Sass
Node.js 
 
 
 
 
Elliot UnitedHealthCare 3/31/2022 面试官：Rahul Chaudhary
 
//Write a function that takes a sorted array of numbers and a target. The function should return the index where this new number can be inserted. 
 
//For example, given 
 
//Array: [0, 2, 4, 6, 8]
//Target: 3 
//The function should return: 2 
//Explanation: The number 3 can be inserted after number 2, which is at index position 1. Hence, the number 3 can inserted at index position 2.
 
// 时间复杂度：O(N)
// 无support自己写的答案，但有O(logN)的解法
function returnIndex(array, target) {
    
    if(target < array[0]) {
        return 0;
    }
    
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] < target && array[i + 1] > target) {
            return i + 1;
        }
    }
    
    return array.length;
}
 
let testArray = [-1, 2, 4, 6, 8];
 
console.log(returnIndex(testArray, -2));
 
Johnson infoway 3/31/2022
 
 
Intro
Function component vs class component
Reducer in redux
How do you prevent a component from rerendering in react
Event loop my
Error first callback in Node.js
ES5, ES6 features（Arrow function, promise, let & const）
Implement a calendar and date picker
 
 
可以用library的话用这个react-datepicker 或者昨天那个react calendar
https://codesandbox.io/s/react-datepicker-example-5cpye
 
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
 
 
 
 
import DatePicker from 'react-datepicker'
 
 
  const [startDate, setDate] = React.useState(new Date)
 
const selectDateHandler = (d) => {
    setDate(d)
  }
 
<div className="App">
       <h3>simple datepicker</h3>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler} 
        minDate={today}
        todayButton={"Today"}/>
 
    </div>
 
 
 
 
 
 
Jenna Apple round 3/31/2022
 
​​Based on resume: (非常非常详细about last project/features)
introduction
When graduated?
Features of last project
Hooks used in last project
Accessibility
What kind of feature needed to add for accessibility in nav bar 
If title necessary for nav icon
 
Introduction about 
Question about their project/feature
 
Coding:
 

<link rel="stylesheet" href="index.css">
 
可以用sort就直接concat完了sort
 
list1.concat(list2).sort((a,b)=>a-b)// a-b 可以sort 大小
 
他现在是按照apharbertic order sort的 
Function删掉啊
 
 
 
 
 
Dominic ENFEC 03/31/2022
 
1: how to add multiple middleware in redux
2: mapstatetoprops vs mapdispatchtoprops
3: how to reset state in redux
4: Thunk vs Saga
5: use of constant in Redux
6: call and put in saga
 
Elliot Apple 3/30
 
 
 
 
 
 
Victor infoway 3/30
Introduction
react hooks and Lifecycle
Virtual dom vs realdom
What is the purpose of using super/props
How to create setState
Why classname > attribute
 
 
 
Jenna InfoWay 3/30
 
 
#7 call api时使用fetch和axios都会undefined
 
展开第一行看是不是https
 
options = { 
uri: "",
method: "GET", 
json: true 
}
 
function doRequest(options) { 
return new Promise ((resolve, reject) => { 
let req = https.request(options); 
req.on('response', res => { 
resolve(JSON. parse(Buffer.from(res))); 
}); 
req.on('error', err => { reject(err); }); }); 
}
 
return await doRequest(options)
 
 
 
 
 
 
 
 
// #6
 
import "./styles.css";
 
function countDup(numbers) {
 let res = 0;
 let store = [];
 for (let i = 0; i < numbers.length; i++) {
   if (!store.find((n) => n === numbers[i])) {
     if (numbers.filter((n) => n === numbers[i]).length > 1) {
       store.push(numbers[i]);
       res += 1;
     }
   }
   console.log(numbers, res);
 }
 return res;
}
 
console.log(countDup([1, 2, 2, 2, 3, 3, 4, 4]));
 
 
1.lifecycle
2.virtual dom
3.SetState
when state changes, react will do re-render
4. How to create props proxy for HOC component
function HOC(WrappedComponent) {
 return class Test extends Component {
   render() {
     const newProps = {
       title: 'New Header',
       footer: false,
       showFeatureX: false,
       showFeatureY: true,
     };
     return <WrappedComponent {...this.props} {...newProps} />;
   }
 };
5.Create a calendar component with two date pickers such as from date and end date, and calculate the date between.
 
https://www.npmjs.com/package/react-calendar
 
Install by executing npm install react-calendar or yarn add react-calendar.
Import by adding import Calendar from 'react-calendar'.
Use by adding <Calendar />. Use onChange prop for getting new values.
 
不给用library？
 
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
 
 
 
-> 昨天问的
1.Intro
2.difference between functional and class components in react
3.redux basic rules 
4. Can you create more stores in redux?
Coding：
 做一个计算器
 
 
Bucky InfoWay 3/29 15mins
react calculator：
 
https://www.golangprograms.com/react-js-calculator.html
这个少一些，简单一些，只有一个app.js文件，css在链接里，可以不超齐，差不多就行
如下：
 
import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      equation: ""
    }
    this.numInput = this.numInput.bind(this);
    this.operInput = this.operInput.bind(this);
    this.decInput = this.decInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }
 
  numInput(e){
    if(this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")){
      if(this.state.equation.match(/[+\-\*\/]/) == null){
        let val = this.state.equation + e.currentTarget.value;
        this.setState({
          display: val,
          equation: val
        });
      } else {
        this.setState({
          display: this.state.display + e.currentTarget.value,
          equation: this.state.equation + e.currentTarget.value
        });
      }
    } else if(this.state.equation.match(/[+\-*\/]$/)){
      let val = this.state.equation + e.currentTarget.value;
      this.setState({
        display: e.currentTarget.value,
        equation: val
      });
    } else if(this.state.display === "0" && e.currentTarget.value !== "0" || this.state.equation.includes("=")) {
      this.setState({
        display: e.currentTarget.value,
        equation: e.currentTarget.value
      });
    }
  }
 
  operInput(e){
    if(this.state.equation.includes("=")){
      let val = this.state.display;
      val += e.currentTarget.value;
      this.setState({
        equation: val
      });
    } else {
      if(this.state.equation != "" && this.state.equation.match(/[*\-\/+]$/) == null){
        let val = this.state.equation;
        val += e.currentTarget.value;
        this.setState({
          equation: val
        });
      } else if(this.state.equation.match(/[*\-\/+]$/) != null){
        let val = this.state.equation;
        val = val.substring(0, (val.length-1));
        val += e.currentTarget.value;
        this.setState({
          equation: val
        });
      }
    }
  }
 
  decInput(e){
    if(this.state.equation == "" || this.state.equation.includes("=")){
      let val = '0.';
      this.setState({
        display: val,
        equation: val
      });
    } else if(this.state.equation.match(/[+\-*\/]$/)){
      let val = '0.';
      this.setState({
        display: val,
        equation: this.state.equation + val
      });
    } else if(!this.state.display.includes(".")){
      this.setState({
        display: this.state.display + e.currentTarget.value,
        equation: this.state.equation + e.currentTarget.value
      });
    }
  }
 
 
  clearInput(){
    this.setState({      display: "0",
      equation: ""
    });
  }
 
  calculate(){
    if(this.state.equation.includes("=")){
      let val = `${this.state.display} = ${this.state.display}`;
      this.setState({
        equation: val
      });
    } else if(this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
      let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
      let val = this.state.equation;
      val += ` = ${result}`;
      this.setState({
        display: result,
        equation: val
      });
    }
  }
 
  render() {
    return (
      <div className="container">
        <Display equation={this.state.equation} display={this.state.display} />
        <Button id="clear" value="clear" display="AC" class="row-3 col-1" click={this.clearInput} />
        <Button id="sign" value="+/-" display="±" class="row-3 col-2" />
        <Button id="percent" value="%" display="%" class="row-3 col-3" />
        <Button id="divide" value="/" display="÷" class="oper row-3 col-4" click={this.operInput} />
        <Button id="seven" value="7" display="7" class="num row-4 col-1" click={this.numInput} />
        <Button id="eight" value="8" display="8" class="num row-4 col-2" click={this.numInput} />
        <Button id="nine" value="9" display="9" class="num row-4 col-3" click={this.numInput} />
        <Button id="multiply" value="*" display="×" class="oper row-4 col-4" click={this.operInput} />
        <Button id="four" value="4" display="4" class="num row-5 col-1" click={this.numInput} />
        <Button id="five" value="5" display="5" class="num row-5 col-2" click={this.numInput} />
        <Button id="six" value="6" display="6" class="num row-5 col-3" click={this.numInput} />
        <Button id="subtract" value="-" display="−" class="oper row-5 col-4" click={this.operInput} />
        <Button id="one" value="1" display="1" class="num row-6 col-1" click={this.numInput} />
        <Button id="two" value="2" display="2" class="num row-6 col-2" click={this.numInput} />
        <Button id="three" value="3" display="3" class="num row-6 col-3" click={this.numInput} />
        <Button id="add" value="+" display="+" class="oper row-6 col-4" click={this.operInput} />
        <Button id="zero" value="0" display="0" class="num row-7 col-1-2" click={this.numInput} />
        <Button id="decimal" value="." display="." class="num row-7 col-3" click={this.decInput} />
        <Button id="equals" value="=" display="=" class="oper row-7 col-4" click={this.calculate} />
      </div>
    );
  }
}
 
const Display = props => <div id="calc-display" className="row-1-2 col-1-4"><span id="eq">{props.equation}</span><span id="dis">{props.display}</span></div>;
 
const Button = props => <button type="button" id={props.id} value={props.value} className={props.class} onClick={props.click}>{props.display}</button>;
 
export default App;
 
 
 
 
 
Johnson Vendor Call 03/29/2022
1:html 5 feature
2: diff of div and span
3:svg, advantage, tags in svg
4: 10 element, highlight 5th element    .container:nth-child(5)
5: animation
6: text-transform
7: position 
8: swap value of variables without creating new variable
 Destructuring Assignment Array Matching [q,w]=[w,q]
9:  “Hello Emma”.tochange() ===> “hELLO eMMA”   Create a prototype function 
 
String.prototype.toChange = function(){ 
return this[0].toLowerCase() + this.slice(1).toUpperCase(); 
 
10:HOC in js
In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
11: weekmap
WeakMap is Map -like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.
 WeakSet is Set -like collection that stores only objects and removes them once they become inaccessible by other means
12: pros and cons in react
13: react hook

14: mimic componentDidMount using hook
useEffect((), [ ]) 
Dependencies in useEffect: https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook/ 
15: useCallback
16: useMemo
The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update. This can improve performance.
17: StrictMode 
StrictMode is a tool for highlighting potential problems in an application. Like Fragment , StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Note: Strict mode checks are run in development mode only; they do not impact the production build.
18: Automatic redirect in react
<Route path:/not-found  
<Redirect to:/not-found
 
 
 
 
 
 
 
Elliot VMware 
 
 
Page performance:
 
Increase Performance 
I will use pure components because PureComponent will automatically implement the shouldComponentUpdate() lifecycle method for you. It will compare the current state and props with the previous one. It will help to avoid re-rendering cycles of the component when its props and state are not changed,
use react lazy loading, it will load the components only when we really need them, so the page will be faster because initial loading only deals with smaller chunks. Less JS means our initial loading of our app is fast.
I will try to minifwying CSS and Javascript and avoiding blocking Javascript
I will try to Reduce number of api call => massive data, lots of api calls, 
 
One of my projects is working with the data science team and the whole project is about data visualization. With large volumes of data and numbers of api calls, the whole application will be slow or even blocked by some of the api calls. So one of my major responsibility is to determine the necessary calls for that page and remove the unassuaged calls, in this way the performance of the application can be improved, 
 
 
Docker: https://docs.docker.com/get-started/
 (not a react component!! )
 
 
 
—--------
 
Victor apple round
 
1: intro
2:accessibility
3: 
Const companies = [{name:”name”,category:”finance”,start:1993, end:1998}]
using console.log print our all the company names
 
companies.forEach(c=>console.log(c.name))
 
companies.filter(c=>c.category==”Retail”)
 
companies.map(c=>c.name)
 
4:== & ===
5:
Nums = [5,1,2,3,4] product of the elements except it self
 
Ans = [24,120,60,40,30]
 
 
const  multipleArr=(arr)=>{
	let result  = []//create a array to store the result of the product
	for(let i=0;i<arr.length;i++){
		let tempResult = 1
		for(let j=0;j<arr.length;j++){
			if(i!=j){ // check if not the same index
			tempResult *= arr[j]//not the same index times to the temp product result
			}
		}		
		result.push(tempResult)// push the product result to the array
	 
	}
	return result
}n
 
 
 
6:
Blogging site, add comment feature
 
We need some api to post the data to the server to save the comment
And also an endpoint to get the comments already in the server
 
Then we can create a component to display all the comment we have 
 
And another component to allow the user to input their comment and submit button
Once they click the submit button
It will trigger the post/put call to save their comments in the server
 
 
First i will have a component to list out of the comments=> commentList
Display all the comment saved in the server
ComponentDidmount / useEffect    
have a state variable( ) after getting the data will save it to the state
 
Component state, or we can using redux if the application layer is complicated
 
Yes
We can using .catch once the api call is failed 
 
 
We can using map to map over the data 
Like using map to create <li> to display all the comments
For example, we can show 10 comments, and have some paginations to allow the user to view more comments
 
 
 
Then the comment input field  => commentField  has input fields and the submit button
7: how to pass data from parent component to child component
Using props
Props is used to pass data from parent to child 
 
8: Can you change the value passed from parent component? 
We can use the callback function which is  passed as props, to change the value of the variable store in parent. 
 
 
 
 
 
 
 
 
 
Jenna vendor call
1: html 5 feature
2: diff of div and span
3: how to tell the browser to compile html5
4: what is svg, advantage
5: css3 features
6: text transform
7: box model
8: position, relative
9: 2 variable, a=10 & b=15, swap data without creating new variables 
 
[a, b] = [b, a];
Destructuring Assignment Array Matching
 
10: each letter becomes lower and rest of the string be upper case. “Hello Jenna”.toChange()==>”hI jENNA”?
 
String.prototype.toChange = function(string){ 
return string[0].toLowerCase() + string.slice(1).toUpperCase(); }
11: [1,2,3,4,5,1] remove duplicate numbers in the array
Let uniqueNumber = [...new Set([1,2,3,4,5,1])]
12: callback and promise
Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope. 
 
Promises are placeholder objects for data that's available in the future.
13: callback hell
 
 
 
Callback Hell, also known as Pyramid of Doom, is an anti-pattern seen in code of asynchronous programming. It is a slang term used to describe and unwieldy number of nested “if” statements or functions. If you are not expecting your application logic to get too complex, a few callbacks seem harmless.
 
 
 
 
14: Memorization in js
Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs are supplied again
 
15: call, apply, and bind
 
 
 
The call() method takes arguments separately. The apply() method takes arguments as an array. The apply() method is very handy if you want to use an array instead of an argument list.
returns a new function, allowing you to pass any number of arguments
 
16: have you ever created plugin in js
A plug-in is piece of code written in a standard JavaScript file. 
But i didnt create any during my project, we using react to create the whole application
 
17: pros and cons of react
 
18: what is hook
 
it’s new feature after 16.8, it allows the developer to using state and mimic lifecycle method in functional component
useState and useEffect
 
19: useCallback
 
The React useCallback Hook returns a memoized callback function.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Apple final interview.
comment system design
 
chat board (ui, call api => GET data => visualize, setInterval) 
comment field (input + submitButton)
	input: value, onChange = {this.handleChange}
	submitButton: onClick ={this. handleClick}
submit: call a
pi => POST data to server => .then(response => if(response.status===200) {GET data and reload the page})
 
redux: action1 =>fetch api, GET data => action2 => SET data into redux store 
=> mapStateToProps => component rerender => chat history updated
 
 
 
 
 
 
There are two div siblings in HTML, both of them have “height 50px、width 50px、margin 50px” styles. What do they look like.
 
How to highlight odd element with white color and even element with blue color.
 
There’s a JS function taking three parameters. Say I mistakenly passed only the first two parameters when calling it. What would happen
 
There’s a JS array filled with many random number. How to remove all even numbers. Does ‘filter’ method return a new array or the existing array. If I don’t use filter, how to remove the numbers in place
 
Difference between state and props. If I have a parent, a child and a grandchild component, can I pass the state and callback function from Parent down to the GrandChild? Is there any upper bound on the layers for passing down things? When you pass the callback to the child, do you still need to pass it to the grandchild, in order for it to use the callback?
 
You know “npm start”, when you’re done developing, what would you do. Or someone else is going to take care of your code? Difference between npm start and npm build? When you run build, say it creates a dist directory. When you run the server, do you need to dist only, or you have to get the source code?
 
Your react component renders a list of data with thousands of items. When you tick the checkbox attached to any data item, the page responds slowly. Is the issue caused by the data consuming a lot of memory, or by the DOM render. How do you solve the issue?
 
What is virtual dom.
 
What does the key property of each item does inside an list in React.
 
Question1: Design an comment component like the one in YouTube.
Question2: Usage of Array.filter and Array.map.
 
 
 
 
 
 
 
streamlinity 3rd Ashok:
let groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs) {
        let key = str.split('').sort().join('');
        map.has(key) ? map.set(key, [...map.get(key),str]) : map.set(key, [str]);
    }
    return [...map.values()];
};
 
 
 
 
 
 
 
03/24/22 apple
function findId (projects) {
  const store = {};
  const res = [];
  projects.forEach(x => {
    x.userProjects.forEach(y => {
      if(y.user. === "UI" && !store[y.user.userId]) {
        store[y.groupuser.userId] = 1;
        res.push(y.user.userId);
      } else if(y.user.group === "UI" && store[y.user.userId]) {
        store[y.user.userId] ++
      }
    })
  })
  return res;
}
 
 
 
 
 
 
 
 
 
03/24/2022 fullstack?
 
abstract class
 
function* generator(i) {
  yield i;
  yield i + 10;
}
 
 
 

 
graphQL
 

 
 
 
redux store method
mapStateToProps
mapDispatchToProps
 
Redux principles: state management library
	Single source of truth. 
		The state of your whole application is stored in an object tree 
			within a single store. …
	State is read-only. 
		immutable.
		The only way to change the state is to emit an action, 
			an object describing what happened. ...
	Changes are made with pure functions (reducer).
 
 

 
high order function and example
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
上一次蓝精灵streamlinity client轮（volvo+samsclub）
Volvo 第一轮：给了api endpoint, 根据需求display data
 
Volvo 第二轮： toDoList
 
/**
 * Description:
 *
 * There's an button and input. When the button is clicked,
 * the text in the input field should be added below in a list.
 * Moreover, whenever any list item is clicked,
 * it should be removed from the list.
 *
 * CSS styling is not part of this task.
 *
 */
 
import React, { FC, useState } from "react";
 
import "./styles.css";
 
const App: FC = () => {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const [inputText, setInputText] = useState<string>("");
 
  const handleDelete = (text: string) => {
    setTodoList(todoList.filter((item: string) => item !== text));
  };
 
  const generateTodoList = () => {
    
    let result= todoList.map((item:string, i:number) => (
      <li key={i}>
        {item}
        <button
          onClick={() => {
            handleDelete(item);
          }}
        >
          delete
        </button>
      </li>
    ));
 
    return <ul>{result}</ul>
  };
 
  const hanldeOnchange = (e: any) => {
    setInputText(e.target.value);
  };
 
  const handleClick = () => {
    let newTodo = [...todoList,inputText]
    setTodoList(newTodo);
    setInputText("");
  };
 
  return (
    <div className="App">
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          hanldeOnchange(e);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
      <hr />
      {todoList.length !== 0 && generateTodoList()}
    </div>
  );
};
 
export default App;
 
 
Samsclub
https://stackblitz.com/edit/react-mfy2zd?file=src%2Fcomponents%2FCheckErrors.jsx
 
import React, { useEffect, useState } from 'react';
import fetchMock from 'fetch-mock';
import ErrorItems from '../data/error-items.json';
import ErrorMessage from '../data/error-messages.json';
 
const errorResponse = { response: ErrorItems };
const errorMessageResponse = { response: ErrorMessage };
fetchMock.get(
 /\/checks/,
 {
   status: 200,
   body: JSON.stringify(errorResponse),
   statusText: 'OK',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   sendAsJson: false,
 },
 { overwriteRoutes: true }
);
 
fetchMock.get(
 /\/errors/,
 {
   status: 200,
   body: JSON.stringify(errorMessageResponse),
   statusText: 'OK',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   sendAsJson: false,
 },
 { overwriteRoutes: true }
);
 
export default function CheckErrors() {
 const [errorItems, setErrorItems] = useState({});
 const [errorMessages, setErrorMessages] = useState([]);
 const [error, setError] = useState([]);
 
 useEffect(async () => {
   window
     .fetch('/checks')
     .then((response) => response.json())
     .then((json) => {
       const flow = JSON.parse(json.body);
       const result = {};
       flow.response.autoCorrectedItems.forEach((item) => {
         if (result[item.errors[0]])
           result[item.errors[0]].push(item.productInfo.name);
         else {
           result[item.errors[0]] = [item.productInfo.name];
         }
       });
       setErrorItems(result);
     });
 
   window
     .fetch('errors')
     .then((response) => response.json())
     .then((json) => {
       const errors = JSON.parse(json.body);
       setErrorMessages(errors.response.errors)
       console.log('errors', errors);
 
     });
 }, []);
 
 useEffect(() => {
   const result = errorMessages.map(item=>{
     return {errorMessage:item.displayMessage,items:errorItems[item.errorCode]}
   })
   setError(result)
 
 }, [errorMessages, errorItems]);
 
 return (
   <div>
     {error.map((error, index) => (
   <div>
     <p>{error.errorMessage.replace("{totalCount}",error.items.length)}</p>
     <ul>
       {error.items.map((item, index) => (
         <li>{item}</li>//item.productInfo.name
       ))}
     </ul>
   </div>
 ))}
   </div>
 );
}
 
 
 
 
 
streamlinity vendor call ashok 3.22.2022
 
project details
when use redux
 
 
添加了if（h>24 || m>60）
