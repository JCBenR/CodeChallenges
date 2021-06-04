//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * ORIGINAL SOLUTION USING TWO LOOPS
 */

 let nums = [2,7,11,15], target = 9
 var twoSum = function(nums, target) {
    
    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};


/**
 * SECOND/FASTER SOLUTION
 */

 var twoSum = function(nums, target) {
    const map = {}
    for(let i=0; i<nums.length; i++){
        const otherNum = target - nums[i];
        
        if(otherNum in map){
            return[map[otherNum], i]
        }
        map[nums[i]] = i
    }
    return null
};