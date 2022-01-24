//Solution #1
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0)
  let currentNode = result
  let carryOver = 0
  while (l1 != null || l2 != null) {
    let v1 = 0
    let v2 = 0
    if (l1 != null) v1 = l1.val
    if (l2 != null) v2 = l2.val
    
    let sum =  v1 + v2 + carryOver
    carryOver = Math.floor(sum / 10)
    sum = sum % 10
    currentNode.next = new ListNode(sum)

    currentNode = currentNode.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  
  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver)
  }
  
  return result.next
};

//Solution #2
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};

//Solution #3
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode();
  let cursor = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    cursor.next = new ListNode();
    cursor = cursor.next;
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val >= 10 ? 1 : 0;
    cursor.val = val % 10;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};
