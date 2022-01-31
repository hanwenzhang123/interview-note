// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    let arr = []
    inorder(root)
    
    function inorder(root) {
    if(root == null) {
        return arr
    }
    
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
    
}
        return arr
};
