/**
 * @param {number[]} height
 * @return {number}
 
 1. set left/right indexes 
 2. area = (right - left) * smallest side 
 3. update max
 4. continue
 
 the goal here is to find the max area. and that can only be the width (the space between indexes) * the smallest height of the edges. it can't exceed that, so getting taller edges for the tallest one won't make a different. 
after each iteration, increase the side that's the smallest, and keep increasing it until it's larger. and so on for the right side. very tricky.
 */

const maxArea = (height) => {
    let max = 0, left = 0, right = height.length -1;
    
    while(left < right){
        let shortest = Math.min(height[left], height[right]);
        let area = (right - left) * shortest;
        
        if (area > max) max = area;
        if (height[left] < height[right]) left++;
        else right--;
    }
    
    return max;
};