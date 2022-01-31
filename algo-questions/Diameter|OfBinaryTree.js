// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function(root) {
    let max = 0
    
    maxDiameter(root)
    
    function maxDiameter(root) {
        if(root == null) {
            return 0
        }
        
        let left = maxDiameter(root.left)
        let right = maxDiameter(root.right)
        max = Math.max(max, right + left)
        return Math.max(left, right) + 1
    }
    
    return max
};