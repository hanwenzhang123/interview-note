// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


var isSymmetric = function(root) {
    
    if(!root) {
        return true
    }
    
    return symmetricHelper(root.left, root.right)
        
    function symmetricHelper(leftNode, rightNode) {
        if(!leftNode && !rightNode) {
            return true 
        }
        
        if(!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false 
        }
        
        return symmetricHelper(leftNode.left, rightNode.right) && symmetricHelper(leftNode.right, rightNode.left)
    }
};

