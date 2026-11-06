/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const expansion =function(s,idx,k){
        let res=0;
        for(let i=!k; ; i++){
            if(!s[idx - i -k])break;
            if(!s[idx + i]) break;
            if(s[idx-i-k] !==s[idx+i])break;
            res++;
        }
        return (res<<1)+((k===1)?0 :1);
    }
    let max=0;
    let center=-1;

    for(let i=0;i<s.length;i++){
        const maxEvens=expansion(s,i,1);
        const maxOdds=expansion(s,i,0);
        const sMax=(maxEvens>=maxOdds)?maxEvens:maxOdds;

        if(sMax>=max){
            center =i;
            max=sMax;
        }
    }
    const start=center-(max>>1);
    const end=start+max;

    return s.slice(start,end);
};