/**
 * @param {number} x
 * @return {boolean}
 * very similar to reversed_int, except that if it's negatvie you can return false immediatly. take X, change to string, split (change to array), reverse it, join it back to a string. n should equal x.toString.
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    
    let n = x.toString().split('').reverse().join('')
    
    if(n === x.toString()) return true;
    return false;
};