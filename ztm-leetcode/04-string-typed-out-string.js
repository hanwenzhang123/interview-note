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

const buildString = function(string) {
    const builtString = [];
    for(let p = 0; p < string.length; p++) {
        if(string[p] !== '#') {
            builtString.push(string[p]);    //push to the array when it is not #
        } else {
            builtString.pop();    //pop out the last element in the array
        }
    }
    return builtString;     //return the value of what we get for the string
}

var backspaceCompare = function(S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    
    if(finalS.length !== finalT.length) {
        return false        //check if the case fails
    } else {
        for(let p = 0; p < finalS.length; p++) {
            if(finalS[p] !== finalT[p]) {
                return false        //check if the case fails
            }
        }
    }
    return true;
};

console.log(backspaceCompare(string1, string2));

step 5: double check for errors
step 6: test our code with our test cases
step 7: space & time complexity
step 8: can we optimize our solution?
