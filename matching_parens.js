/**
 * the goal here is to have matches. at first i tried a series of if statements where if i saw an opening bracked, i pushed the corresponding closing bracket to the stack. else, if is saw another type (which should be a closing bracket) i pop off the stack, which should also match that bracket. if not, return false.
 * better way is to have the map where the key is the opening bracket and value is the closing. from there it's the same concept of adding if it's an opening and adding to the stack. then if you get a closing, you pop one off the stack and check to see if the closing matches the map value of the one just off the stack.
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let i = 0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        } 
        else {
            let paren = stack.pop();

            if(s[i] !== map[paren]) return false;
        }
        
    }
     if(stack.length !== 0) return false;
    return true;
};

