/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

1. start with empty array list to put combos in.
2. helper function checks if new target is less than 0, if so, you've gone too far, return, and will then pop that number out of the combo.
3. check if new target is 0. if so then we've found a match. add it to the list and return, which will pop the number out and test any more combos.
4. helper function, take in new target, which is original target minus whatever we've added so far (that is less than the target).
5. push next item and recurse (which will check if that item sent us over target sum).
6. pop the last item to check for other combos.
7. kickstart helper function
8. return list
*/
 var combinationSum = function(candidates, target) {
    
    let returnList = [];

    const getCombo = (newTarget, current, start) => {
        if(newTarget < 0) return;
        if(newTarget === 0){
            returnList.push([...current]);
            return;
        }
        
        
        for(let i = start; i < candidates.length; i++){
            current.push(candidates[i]);
            getCombo(newTarget - candidates[i], current, i);
            current.pop();
        }    
    }
    getCombo(target, [], 0);
    return returnList;
};