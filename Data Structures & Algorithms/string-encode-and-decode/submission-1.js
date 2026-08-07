class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let str = strs.map( val => `${val.length}#${val}`).join("")

        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let ans=[]

        let i=0
        
        while(i<str.length){

            let j=i;

            while(str[j]!='#'){
                j++
            }

            let len= parseInt(str.slice(i, j))

            ans.push(str.slice(j+1, j+1+len))

            i=j+1+len
        }

        return ans
    }
}
