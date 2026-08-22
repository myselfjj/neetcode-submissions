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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let curr1 = list1;
        let curr2 = list2;

        let list3 = new ListNode();

        let curr3 = list3;

        while(curr1 || curr2){

            if(curr1 && curr2){

                if(curr1.val <= curr2.val){
                    let newNode = new ListNode(curr1.val);
                    newNode.next = curr3.next;
                    curr3.next = newNode
                    curr1 = curr1.next
                }
                else{
                    let newNode = new ListNode(curr2.val);
                    newNode.next = curr3.next;
                    curr3.next = newNode
                    curr2 = curr2.next
                }
            }

            else if( curr1 ){
                let newNode = new ListNode(curr1.val);
                    newNode.next = curr3.next;
                    curr3.next = newNode
                    curr1 = curr1.next
            }

            else if( curr2 ){
            let newNode = new ListNode(curr2.val);
                    newNode.next = curr3.next;
                    curr3.next = newNode
                    curr2 = curr2.next
            }
            curr3 = curr3.next
        }

        return list3.next
    }
}
