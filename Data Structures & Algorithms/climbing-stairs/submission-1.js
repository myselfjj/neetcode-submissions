class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let curr =1, prev =1, i=0, temp;

        while(i<n-1){
            temp = curr;
            curr = curr+prev;
            prev = temp;
            i++
        }

        return curr;


    }
}
