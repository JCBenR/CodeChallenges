/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * NOTE: should be in O(logN) time
 * 
 * this is a simple binary search. 
 * 1. determine low and high indexes
 * 2. as long as you haven't met in the middle, keep going
 * 3. find mid of current low/high.
 * 4. check if mid is target.
 * 5. check if low value is lower than mid. the point of this is to see if you're on a sorted half of the array.
 * 6. if you are on the sorted half, then just determine if the target is to the left or right of mid. move accordingly.
 * 7. if you're not on the sorted half, then move to the right side.
 * 
 * the goal is to get high, low and mid to essentially collide in the same spot. 
 */
 var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(target === nums[mid]) return mid;
        if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]){
                high = mid-1;
            } else {
                low = mid+1
            }
        } else{
            if(nums[mid] <= target && target <= nums[high]){
                low = mid+1;
            } else {
                high = mid-1
            }
        }
    }
    return -1;
};