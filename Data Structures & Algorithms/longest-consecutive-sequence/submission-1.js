class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0)
        return 0

        const arr=nums.sort((a,b) => a-b)

        let count=0
        let maxCount=0

        for(let i=0; i<arr.length-1;i++){
            if(arr[i]==arr[i+1]-1){
            count++
            if(maxCount<count) maxCount=count;
            }

            else if (arr[i]==arr[i+1]) continue
else            count=0
        }

        return maxCount+1
    }
}
