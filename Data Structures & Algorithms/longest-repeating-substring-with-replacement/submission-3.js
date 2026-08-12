class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let l=0, r=0, res=0;

        const hm = new Map()

        while(r<s.length){
            // if(!hm.has(s.charAt(r))){

                hm.set(s.charAt(r), (hm.get(s.charAt(r))??0)+1)
            // }
            let max=0;
            for(let val of hm.values()){
                if(max<val)
                max=val
            }
            if((r-l+1-max)<=k){
                if(res<r-l+1)
                res=r-l+1
            r++
            }
            else{
                hm.set(s.charAt(l), (hm.get(s.charAt(l))??0)-1)
                l++
                r++
            }




        }
        return res
    }
}
