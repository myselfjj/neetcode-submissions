class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const set1=new Set();

        for(const i of nums){

            if(set1.has(i))
            return true;

            set1.add(i);
        }
        return false;
    }
}
