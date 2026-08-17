class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {


        let xorSum = 0;

        for(let i=0 ;i <=nums.length; i++){

            xorSum = xorSum^i;
        }

        nums.forEach(num => xorSum=xorSum^num)

        return xorSum;

    }
}
