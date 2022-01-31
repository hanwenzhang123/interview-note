// Given the root of a binary tree, invert the tree, and return its root.


var invertTree = function(root) {
    if(!root) {
        return null
    }
    
    let queue = [root]
    
    while(queue.length > 0) {
        let cur = queue.shift()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp
        
        if(cur.left != null) {
            queue.push(cur.left)
        }
        
        if(cur.right != null) {
            queue.push(cur.right)
        }
    }
    return root  
};