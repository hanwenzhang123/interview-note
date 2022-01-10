//Solution #1
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

//Solution #2
var inorderTraversal = function(root) {
   return visitNode(root, []);
};

var visitNode = function(root, arr) {
    if (!root) {
        return [];
    }
    
    if (root.left){
        visitNode(root.left, arr);
    }
    
    if (root){
        arr.push(root.val);
    }
    
    if (root.right){
        visitNode(root.right, arr);
    }   
    
    return arr;
}
