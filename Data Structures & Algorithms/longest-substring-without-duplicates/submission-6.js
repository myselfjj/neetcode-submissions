class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const set = new Set()

        
        
        let l=0, r=0, longest=0;
        

        while(r<s.length){

            while(set.has(s.charAt(r))){
                set.delete(s.charAt(l))
                l++
            }
            set.add(s.charAt(r))
            if(longest<(r-l+1))
            longest=r-l+1
            r++

        

        }
        return longest
    }
}
