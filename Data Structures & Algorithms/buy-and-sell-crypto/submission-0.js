class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {

        let maxProfit=0
        let buy=nums[0]

        let i=1

        while(i<nums.length){

            if(buy>nums[i]){
            buy=nums[i]
            i++
            }
            else{
                if(maxProfit<(nums[i]-buy)){
                    maxProfit=nums[i]-buy
                }
                i++
                
            }
            


        }
        return maxProfit
    }
}
