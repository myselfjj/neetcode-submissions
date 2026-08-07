class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix=Array(nums.length)
        let postfix=Array(nums.length)

        let i=0
        let j=nums.length-1

        while(j>=0){

            prefix[i]=(nums[i]*(prefix[i-1]??1))
            postfix[j]=(nums[j]*(postfix[j+1]??1))

            i++
            j--

        }
        let ans=[]
        for(let i=0;i<nums.length;i++){

            ans.push((prefix[i-1]??1)*(postfix[i+1]??1))


        }

        return ans
    }
}
