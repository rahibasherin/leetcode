/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length; i += 2) {
        result.push(nums[i + 1]);
        result.push(nums[i]);
    }

    return result;
};