/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        if(!head.next)
        return head.next

        let count = 0;

        let curr = head;

        while(curr){
            count++
            curr = curr.next
        }

        let index = count - n

        curr = head

        while(index>1){

            curr = curr.next
            index--
        }
        

        if(index==0)
        return head.next
        else
        curr.next = curr.next.next;

        

        return head
    }
}
