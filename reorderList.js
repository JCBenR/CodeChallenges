/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if(head === null || head.next === null) return head;
    
    let findMiddle = (head) => {
        let s1 = head; //slow pointer
        let f1 = head;//fast pointer
        while(f1 !== null){
            //keep moving while neither next or next.next is null
            if(f1.next !== null && f1.next.next !== null){
                s1 = s1.next;
                f1 = f1.next.next || null;
            } else {
                f1 = null;
            }
        }
        
        let middle = s1.next; //move middle up
        s1.next = null;//make end of first half of list null
        return middle;
    }
    
    let swapEnd = (middle) =>{
        let curr = middle;
        let prev = null;
        let next = null;
        
        while (curr !== null){
            next = curr.next; //make pointer to next before you sever the tie
            curr.next = prev; //make next previous (starts null, then the previous)
            prev = curr;//make previous the current one for next iteration
            curr = next;//make current one next in list
        }
        return prev;
    }
    
    let merge = (l1, l2) =>{
        let l1Next = null;
        let l2Next = null;
        while (l2 !== null){
            l1Next = l1.next;//pointer to hold on to next
            l2Next = l2.next;//pointer to hold on to next
            l1.next = l2;//merge beginning and ending list
            l2.next = l1Next;
            l1 = l1Next;//move pointers up.
            l2 = l2Next;
        }
    }
    
    let middle = findMiddle(head);
    let secondHalf = swapEnd(middle);
    let merged = merge(head, secondHalf);
    
};
    