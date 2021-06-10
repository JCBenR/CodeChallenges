/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

1. make an absolute of x, which will get rid of the negative sign. 
2. change to string
3. change to array
4. reverse the array
5. join it back to a string
6. change it to an int
7. if it's greater than the max, return 0
8. otherwise, see if x was originally negative. if so, return a negative of reversed, otherwise return reversed.
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    n = Math.abs(x);
    let str = n.toString();
    let strArr = str.split('');
    
    let revArr = strArr.reverse();
    
    
    let reversed = revArr.join('');
    let int = parseInt(reversed);
    
    return int > 0x7FFFFFFF ? 0 : x < 0 ? -int : int 
};