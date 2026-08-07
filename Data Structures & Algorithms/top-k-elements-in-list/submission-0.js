class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const hm=new Map()

        for(const i of nums){

            hm.set(i, (hm.get(i)??0)+1)
        }

        const arr= [...hm.entries()].sort(([, val1], [, val2]) => val2-val1)

        let ans=[]

        for(const i of arr){
                     
                     ans.push(i[0])
                     k--

                     if(k==0)
                     break
        }

        return ans
    }
}
