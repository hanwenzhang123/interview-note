1. You enter a URL into a web browser
2. The browser looks up the IP address for the domain name via DNS
3. The browser sends a HTTP request to the server
4. The server sends back a HTTP response
6. The browser begins rendering the HTML

Array Slice and Splice
Slice will create a copy of the original array but not modity 

Number(y)
Or we can just console.log(+y)

The difference between encodeURI and encodeURIComponent is encodeURIComponent encodes the entire string, 
  where encodeURI ignores protocol prefix ('http://') and domain name. 
  encodeURIComponent is designed to encode everything, where encodeURI ignores a URLs domain related roots.
  
Parent to child through props, child to parent through callback
Same level components need lifting states up 
Or using some library like Redux or React.Context
 

const store = {}
states.forEach(item=>{ store[item] ? store[item]++ : store[item] = 1 })
 
 
HTML is sensitive, css is not case sensitive
 
important>inline>css
 
display:none?
 
 
 
 
 
//2022.2.11 apple
 
先说思路
把数字用frequncy map 存起来count
然后做一下判断 找出最大的

const fint_super_majority = (array) => {
    const freqMap =  {}
    array.forEach((num) => {
	if(freqMap[num] === undefined) {
		freqMap[num] = 1;
       } else {
		freqMap[num] += 1;
}
    });
    const keys = Object.keys(freqMap)
    const values = keys.map(key => freqMap[key]);
    const maxValue = Math.max(...values)
    let res = null;
    let count = 0;
    for(let i = 0; i<values.length; i++){
	const num = keys[i];
       const value = values[i]
       if(value === maxValue) {
		res = num
		if(count !== 0) {
			return -1
}
count++;
       }
    }
    return res;
    
}


//2022.02.11 streamlinity 3rd interview Victory
 
where r u located,
intro, work exp
who is the user
 
Information logging
Interface for marketing localization input
creating new profile session for different modules and departments
 
team size，scrum master, product manager, 3fe, 2bckend，

When i was building components library, a lot of previous sections were built by different co-workers. 
It was pretty hard to manage the common component considering everyone has different coding style, 
  I have to discuss with team to come up with proper structure of these components to make sure the newly added component will not break the original functionality of the page
 
  
share screen
 
var angleClock = function(hour, minutes) {
    const minAngle = (minutes / 60) * 360;
    const hourAngle = (((hour % 12) / 12) * 360) + ((360 / 12) * (minutes / 60));
    
    return Math.min(Math.abs(hourAngle - minAngle), 360 - Math.abs(hourAngle - minAngle));
};
 
代码题： 时钟上时针和分针的角度数


jest
 
Class MyInfo {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
  }

  firstNameGetter() {
    Return this.firstName;
  }

  lastNameGetter() {
    Return this.lastName;
  }

  firstNameSetter() {
    We pass the new value of 
  }

  lastNameSetter() {

  }
}
 

team size, technology stack.
 
That is all my question
 
props, redux, context
we can use #Context in pure react
		Context is used in React to share data across deeply nested components
		const ColorContext = React.createContext("yellow")
		​​
 
 
For example if we want to propagate the theme of a website to some children component, we can
 
Create a themeContext, and use Provider and Consumer to use it in certain level of the component
 
tree.
 
1.debounce: “”
			for a fast typist there will be several API calls in a search
				And API calls aren’t guarenteed to return in order
			
			按下后等待时间之后触发，
			期间任何再次触发都会重置等待时间
      
2.throttle:  “喉咙: 节流”
			在每次wait time中，只被触发一次
 
For example, when we have a search bar, we use debounce to make user the 
Search api doesn’t trigger on every simple letter the user types,
Use Debounce to create a delay on fast inputting, so that api doesn’t 
trigger on every single letter the user types,
 
 
import { useState } from ‘react’;

function App() {
	const [firstName, setFirstName] = useState(“”);
	const [lastName, setLastName] = useState(“”);
  const [email, setEmail] = useState(“”);
  const firstNameHandler = e => {
    setFirstName(e.target.value);
  } 
  const lastNameHandler = e => {
    setLasttName(e.target.value);
  }
  const firstNameHandler = e => {
    setEmail(e.target.value);
  }
  const onSubmit = () => {

    // Handle the validation here, add logic to sanitize the input

    Repeat the question?
    Type

    For example, when we have a search bar
    }
    console.log(firstName);
  }
 
return (
	<div>
		<label>First Name</label>
		<input value={fistName} onChange={firstNameHandler} />
		<label>Last Name</label>
		<input value={lastName} onChange={lastNameHandler} />
    <label>Email</label>
		<input value={email} onChange={emailHandler} />
		<button onClick={onSubmit}>Submit</button>
	</div>
);
}

Export default App ; 
