/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        const sArr = intervals.map( val => val.start)
        const eArr = intervals.map( val => val.end)

        sArr.sort((a,b) => a-b);
        eArr.sort((a,b) => a-b);

        let res=0, count=0;
        let s=0, e=0;

        while(s<sArr.length){

            if(sArr[s]<eArr[e]){
                count++;
                s++
            }
            else if(sArr[s]>=eArr[e]){
            count--;
            e++
            }

            res=Math.max(res, count)
        }

        return res



    }
}
