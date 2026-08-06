class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const hMap = new Map();
        
        for(let i=0; i<nums.length; i++){
            const diff=target-nums[i];

            if(hMap.has(diff)){
                return [hMap.get(diff), i];
            }

            hMap.set(nums[i], i);
        }

        return [];
    }
}
