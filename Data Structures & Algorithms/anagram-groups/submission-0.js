class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hm = new Map();

        for(const str of strs){
            let a=Array(26).fill(0)
            for(const s of str ){
                const index=s.charCodeAt(0)-'a'.charCodeAt(0)

                a[index] = a[index]+1
            }

            const key = a.join(',')

            const list = hm.get(key)??[]

            list.push(str)

            hm.set(key,list )
        }

        let ans = []

        for(const value of hm.values()){
            ans.push(value)
        }
        return ans
    }
}
