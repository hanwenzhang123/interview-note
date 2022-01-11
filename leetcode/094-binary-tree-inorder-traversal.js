var inorderTraversal = function(root) {
    return !root ? [] : dfs(root, [])
};

const dfs = (root, res) => {
    if (!root) return
    if (root.left) dfs(root.left, res)
    res.push(root.val)
    if (root.right) dfs(root.right, res)
    return res
}

/*
Morris Traversal Algorithm
Time - O(N)
Space - O(1)
1. initialize tourist as root
2. while the tourist is not on lost (null)
    set a guide to look at the tourist left subtree
    the guide will walk to right most point
    
    (if there is a bridge, destroy it! note it go right)
    guide will create a bridge to the tourist
    tourist walks to left
    
(if the guide is lost)
tourist will note this is the end
tourist will walk to the right
 */

function inorderTraversal(root){
    let tourist = root;
    let solution = [];
    
    while(tourist !== null){
        let guide = tourist.left;
        if(tourist.left !== null) {
            while(guide.right !== null && guide.right !== tourist){
                guide = guide.right;        //to the right most point
            }
            if(guide.right === null){   //right most point
                guide.right = tourist;
                tourist = tourist.left;
            } else {
                guide.right = null;
                solution.push(tourist.val);
                tourist = tourist.right;
            }
        } else {
            solution.push(tourist.val);
            tourist = tourist.right;
        }
    }
    return solution;
}

//DFS
// Time - O(N)
// Space - O(N) - at worst

//Solution
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length !== 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};

//Solution
var inorderTraversal = function(root) {
   return visitNode(root, []);
};

var visitNode = function(root, arr) {
    if (!root) {
        return [];
    }
    
    if (root.left){     //to the left most
        visitNode(root.left, arr);
    }
    
    if (root){      //push the root.value
        arr.push(root.val);
    }
    
    if (root.right){
        visitNode(root.right, arr);
    }   
    
    return arr;
}
