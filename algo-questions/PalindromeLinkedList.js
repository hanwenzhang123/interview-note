// Given the head of a singly linked list, return true if it is a palindrome.

var isPalindrome = function(head) {
    let slow = head
    let fast = head
    let prev = null
    
    if(head == null && head.next == null) {
        return true
    }
    
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    
    while(slow !== null) {
        let temp = null
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp 
    }
    
    while(head !== null && prev !== null) {
        if(head.val !== prev.val) {
            return false
        }
        head = head.next
        prev = prev.next
    }
    
    return true
};