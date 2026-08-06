class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sMap=new Map();
        const tMap=new Map();

        if (s.length!=t.length)
        return false;

        for(let i=0;i<s.length;i++){
        
            sMap.set(s.at(i), (sMap.get(s.at(i))??0)+1);
            tMap.set(t.at(i), (tMap.get(t.at(i))??0)+1);

        }


        for(const i of s){

            if(sMap.get(i)!=tMap.get(i))
            return false;
        }

        return true;
    }
}
