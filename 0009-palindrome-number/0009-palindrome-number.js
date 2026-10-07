/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rev=0;
    var copy =x;

    while(copy>0){
        const digit=copy %10;
        rev=rev *10+digit;
        copy =~~(copy / 10);
    }
    return rev == x;
};