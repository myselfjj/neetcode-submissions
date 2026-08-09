class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {

        let i=0
        let j=nums.length-1

        let max=0;

        while(i<j){

           max= Math.max(max, (j-i)*(Math.min(nums[i],nums[j])))

           if(nums[i]<nums[j])
           i++
           else
           j--
           

        }
        return max
    }
}
