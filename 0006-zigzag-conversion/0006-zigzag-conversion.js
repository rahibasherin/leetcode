/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let ob=new Map();
    if(s.length<numRows || numRows<2)return s
    let count=0;
    let diagonal=false;
    for(let i=0; i<s.length; i++){
        ob.set(count,(ob.get(count) || "")+s[i])
        if(count==numRows-1)diagonal=true;
        else if(count==0)diagonal=false
        count =!diagonal? (count+1):(count-1)
    }
    let sta=""
    for(let i=0; i<numRows; i++){
        sta= sta+ob.get(i)
    }
    return sta
};