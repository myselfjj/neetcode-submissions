class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let ans=[]
        ans[0]=1

        for(let i=1;i<nums.length;i++){
            ans[i]=ans[i-1]*nums[i-1]
        }

        let postfix=1

        for(let i=nums.length-1; i>=0;i--){
            ans[i]=ans[i]*postfix
            postfix=postfix*nums[i]
        }

        return ans
    }
}
