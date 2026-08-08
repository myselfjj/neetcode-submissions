class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set1=new Set(nums)

        let longest=0;

        for(let i=0;i<nums.length;i++){

            if(!set1.has(nums[i]-1)){

                let length=1

                while(set1.has(nums[i]+length)){
                    length++
                }
                if(longest<length)
                longest=length
            }
        }

        return longest
    }
}
