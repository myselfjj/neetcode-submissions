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

        let arr=Array.from({length:nums.length+1}, ()=>[])

        for(const [key,val] of hm.entries()){
            arr[val].push(key)
        }

        let ans=[]
        
        for(let i=arr.length-1; i>0; i--){
            for(const j of arr[i]){
                ans.push(j)
                if(ans.length===k) return ans
            }
        }
    }
}
