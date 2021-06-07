
/**
 * 
 * @param {*} s original string working with
 * @returns length of max unique substring with no character repeated
 * 
 * 1. create A & B pointers, which will create a sliding window. 
 * 2. create a Set to hold unique characters. a Set will now allow for duplicates.
 * 3. bPt will increment every time there is a unique character that is not already in the Set. then determine the Math.max of max and mySet size. make max this number
 * 4. if item is in the set, remove the character in the aPt position (even if it is not the duplicate) and increment aPt. this will repeate until there are no more unique characters
 * 5. return max.
 * 
 * the logic on this one is tricky, but the goal is to get that max number, so once you hit a duplicate character, start removing stuff until you have no more duplicates. as long as that duplicate character remains in the set, it doesn't matter what you remove before it, because they are relevant to the substring. 
 */


 var lengthOfLongestSubstring = function(s) {
    let aPt = 0, bPt = 0, max =0;
    
    let mySet = new Set();
    
    while(bPt < s.length){
        if(!mySet.has(s[bPt])){
            mySet.add(s[bPt]);
            max = Math.max(max, mySet.size)
            bPt++;
        } else {
            mySet.delete(s[aPt]);
            aPt++;
        }
    }
    return max
};