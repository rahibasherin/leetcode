/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parantheses={
        ')':'(',
        '}':'{',
        ']':'[',
    };
    const stack=[];
    for (let char of s){
        if(!(char in parantheses)){
            stack.push(char);
            continue;
        }
        const top=stack.pop();
        if(top!==parantheses[char]) return false;
    }
    return !stack.length;
};