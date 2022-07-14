/**
 * Leetcode Palindrome problem
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const num = x.toString();
    let reverseNum = '';
    for(let i = num.length - 1; i >= 0; i--) {
        reverseNum += num[i];
    }
    if(reverseNum === num) {
        return true;
    }
    return false;
};

