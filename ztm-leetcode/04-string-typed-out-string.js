//Question #4: Typed Out Strings (Easy)
Given two strings S and T, return if they equal when both are typed out. 
Any "#" that appears in the string counts as a backspace.

step 1: verify the constraints
What happens when two # appear beside each other? Delete the two values before the first #
What happens to # when there is no character to remove? It deletes nothing then, just like backspace would. 
Are two empty stings are equal to each other? Yes, consider two empty strings are euqal
Does case sensitivity matter? Yes, it does, a does not equal A

step 2: write out some test cases
S: "ab#z" T:"az#z"    true
S: "abc#d"  T:"acc#c"   false
S: "x#y#z#"   T: "a#"   true
S: "a###b"  T: "b"  true
S: "Ab#z" T:"ab#z"  false   //"Az" "az"

step 3: figure out a solution without code

step 4: write out our solution in code
const string1 = "ab#z"
const string2 = "az#z"

const buildString = function(string) {      //O(n)
    const builtArray = [];
    for(let p = 0; p < string.length; p++) {   //iterate each letter of the string
        if(string[p] !== '#') {
            builtArray.push(string[p]);    //push the letter to the array when it is not #
        } else {
            builtArray.pop();    //pop out the last element in the array when we see #
        }
    }
    return builtArray;     //return the value of what we get for the string
}

var backspaceCompare = function(S, T) {
    const finalS = buildString(S);      //O(a): a - the size of s
    const finalT = buildString(T);      //O(b): b - the size of t
    
    //O(a) or O(b)
    if(finalS.length !== finalT.length) {   //if the length of both are different
        return false     //we know it is not the same, return false
    } else {        //if two string length are the same
        for(let p = 0; p < finalS.length; p++) {  //iterate through one to check on another one
            if(finalS[p] !== finalT[p]) {   //check if equal for both array on each index
                return false        //return false if the value on the index not equal
            }
        }
    }
    //no more other logics to cause the validation to fail
    return true;
};

console.log(backspaceCompare(string1, string2));

step 5: double check for errors

step 6: test our code with our test cases

step 7: space & time complexity
// time complexity: O(a+b)
// space complexity: O(a+b)

step 8: can we optimize our solution?
const string1 = "ab#z"
const string2 = "az#z"

"abc#d" => "abd"
['a', 'b', 'd']
T/F
"abzz##d" => "abd"
['a', 'b', 'd']

//we need to create the data structure in order to compare
//we can move the pointers from the end to front
//we also compare each element value from the end 

var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;       //pointer starts from the end of the string
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {     //when we see a #
                let backCount = 2;      //initialize a variable backCount with value 2 since we need to back count by 2
                
                while(backCount > 0) {  //while back count is bigger than 0
                    p1--;       //the pointer shifts over by one
                    backCount--;    //back count minus one
                    
                    if(S[p1] === "#") { //if we see another #
                        backCount += 2; //we add the back count 
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {    //check the value if are the same
            if(S[p1] !== T[p2]) {  //if not the same, then return false
                return false;
            } else {    //else, we shift both pointers until the beginning
                p1--;
                p2--;
            }
        }
    }
    
    return true;
};

console.log(backspaceCompare(string1, string2));
