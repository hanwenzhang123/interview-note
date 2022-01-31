// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null
    if(head == null) {
        return null
    }
    
    while(head!== null) {
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }
    
    return prev
    
};