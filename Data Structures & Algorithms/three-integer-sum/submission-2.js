class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a,b) => a-b)

        const ans=[]

        for(let i=0;i<nums.length;i++){

            const target=-(nums[i])

            let j=i+1
            let k=nums.length-1

            if(nums[i]==nums[i-1])
            continue

            while(j<k && j!=k){

                if(nums[j]+nums[k]<target)
                j++
                else if (nums[j]+nums[k]>target)
                k--
                else {
                ans.push([nums[i], nums[j], nums[k]])
                j++
                while(nums[j]==nums[j-1] && j<k)
                j++
                }

            }
        }

        return ans


    }
}
