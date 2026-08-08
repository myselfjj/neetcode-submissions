class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const arr= Array.from(s)

        let i=0
        let j=arr.length-1

        while(i<j){

            if(!(arr[i]>='A' && arr[i]<='z') && !(arr[i]>='0' && arr[i]<='9')){
            i++
            continue
            }
            if(!(arr[j]>='A' && arr[j]<='z') && !(arr[j]>='0' && arr[j]<='9')){
            j--
            continue
            }
            else if(arr[i].toLowerCase()!=arr[j].toLowerCase())
            return false
            i++
            j--
        }

        return true
    }
}
