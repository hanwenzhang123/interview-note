//Create a function that reverse a string
//"Hi My name is Hanwen" should be:
//"newnah si eman yM iH"

function reverse(str){
  //check input
  if(!str || str.length < 2 || typeof str !== 'string') {  //undefine or too short or not a string
    return 'hmmm that is not good';
  }
  
  const backwards = []; //backwards array
  const totalItems = str.length - 1;    //how many items we have in the string
  for(let i=totalItems; i>=0; i--) {   //start from the last item, index 0 is the ending point, then going backwards using --
    backwards.push(str[i]);
  }
  console.log(backwards);   //here we can get our backwards as array but not as string so we use join method below to return the value

  return backwards.join('')  //at the end we return back to string
}


function reverse2(str){
  return str.split('').reverse().join('')   //using the built-in method .reverse()
}


const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');


reverse("Hi My name is Hanwen")
reverse2("Hi My name is Hanwen")
 

// split & join
let sentence = "Hello my name is Hanwen";
let words = setence.split(" ")   //['Hello', 'my', 'name', 'is', 'Hanwen']  with a space
let chars = setence.split("name") //['Hello my', 'is Hanwen']

  .split("")  //no space, then we split it to every single characters

let hyphenated = words.join("-"); //Hello-my-name-is-Hanwen
let withSpace = words.join(" "); //with spaces - Hello my name is Hanwen
let oneWord = words.join(""); //no spaces - HellomynameisHanwen

    
