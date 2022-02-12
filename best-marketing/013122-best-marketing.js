1/12/2022 - Apple
 
Experience
 
What project you develop with React
 
React state
 
The flow to develop the feedback feature page (comments + 5 star ratings)
 
Five components we need to support this
Textarea for comments, input field for ratings, edit button, submit button
Reusable components for this features
Button, input and textarea
 
Vue experience
 
Tech can improve performance
lighthouse
Responsive design
 
Cross-browser ability
Media query for style
 
 
 
Phone number(number type + length)
80 length - 120

 
 
1/25/2022 - Apple
 
1.Intro & project
2.more familiar with which one? class or func compo?
prefer which? why? 
3.what hooks.
4.State Manage. Redux
5.What is Redux, its flow.
React.Component 
		==call==> Action Creator: Action 
			==dispatch==> Reducer 
				==> new state
	Redux ==> React.Component
		mapStateToProps;
		mapDispatchToProps;
		connect(⬆️)(App) 
 
6.Middleware, what is thunk, how it work
redux-thunk, saga, promise
7.setting state in function component
Async
	setState to update the state and re-render the page
	setState will trigger some inner work in react. like re-render.
	this.state equals， won’t have same effect
 
 
8.what is virtual Dom
9.Redux store features
	and differ localStore, sessionStore.
10.func expression vs func declaration
const xxx = function () {
}
vs
	(function XXX() {
})()
hoisting
11. Iife
12. AJAX: 
library Axios.all()
能，async，even though js is single thread
axios, promise, axios.all()
but with promise or other methods we can handle them together, in an async way.
with web workers we can defly do multi thread.
13.box model
14 break point 
responsive, media query different screen size
15 px:base on the pixel rem:font em
vw base on viewpoint, but percentage is base on the parent container
17. 可以用本地ide，他说，也可以网上找个
react-router
what do you mean by passing props? props of component?
or props for what?
 
Router v6 allows passing props to the route.
18. route create at compiling or front end?
	front end as component
 
19. Coding: Flatten array object.
提取[{link:1, type: [{link:4, type:[{link: 5}]}]}, {link: 2}, {link: 3}]中所有link
可array中array可叠加n多层
 
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
 
 
20. 完成之后面试官要求用reduce改写
 
const findLink = (array) => {
  return array.reduce((pre, cur)=>{
    if(cur.link) {
      pre.push(cur.link)
    }
    if(cur.type) {
      pre = pre.concat(findLink(cur.type))
    }
    return pre
  }, [])
}
 
 
 
1.27 apple vendor
1. Experience
2. Margin collapse
3. Npm start and npm build
4. Difference props and state
5. Difference virtual DOM and DOM
6. How to take even number from array
 
 
 
11：30 是150 度
这个代码是ok的
 
function getAngle (hour, min) {
    const hourAngle = (hour > 12 ? hour - 12 : hour) / 12 * 360;
    const minAngle = min / 60 * 360;
 
    let diff = minAngle - hourAngle;
    if(diff < 0) {
        diff = 360 + diff
    }
    return diff > 180 ? 360 - diff : diff
}

 
1.31 apple vendor round 2
 
1. let var const
2. closure
3. function expression, declaration, arrow function
4. apply, call, bind
5. Promiss
6. Observable
7. React Virtual Dom, less memory waste
8. React lifecycle
9. state in React 
10. components of React
11. function of redux, it’s data flow
12. redux principles/significance
13. react-router
14. questions: team size? daily routine? Technology stacks?
 
  
