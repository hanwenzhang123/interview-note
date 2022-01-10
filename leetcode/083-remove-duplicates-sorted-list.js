var deleteDuplicates = function(head) {
    let current = head;
    while (current && current.next){    //check current and next is not null, which means we are at the end of the list
        if(current.val == current.next.val){
            current.next = current.next.next;       //move it is next reference skip the current next to next.next
        } else {
            current = current.next;
        }
    }
    return head;
};
