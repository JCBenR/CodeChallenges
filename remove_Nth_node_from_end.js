/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 
 a tricky one with edge cases. set two pointers both at the start. the first pointer is to count how many elements are in the list. take that number and subtract n and you'll get how many space you have to move to remove the node.
 
 edge case: empty array--return null; removing head--if moves you're supposed to move is 0 then make head the head.next. 
 
 
 */
 var removeNthFromEnd = function(head, n) {
    let count = 0;
    let curr1 = head;
    let curr2 = head;
    
    if(head.next === null || head === null){
        return null
    }
    if(curr1 !== null) count++;
    
    while(curr1.next !== null) {
        count++;
        curr1 = curr1.next;
    }
    
    let moves = count - n;
    if(moves === 0) {
        head = head.next;
        return head;
    }
    
    for (let i = 0; i < moves-1; i++){
        curr2 = curr2.next;
    }
    curr2.next = curr2.next.next
    return head;
};