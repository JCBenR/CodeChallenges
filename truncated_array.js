/**
 * Truncate an integer array such that `2×min` becomes more than `max`
 *
 * Input:  [4, 6, 1, 7, 5, 9, 2]
 * Output: The minimum number of removals is 4
 * The truncated array is [7, 5, 9] where 9 < 2 × 5.
 *
 * 1. find max & maxIndex
 * 2.
 */

 let beginningArray = [4, 6, 1, 7, 5, 9, 10, 2];
 let testArray = [4, 2, 6, 4, 9];
 
 let max, maxIndex, min, minIndex, stopPoint;
 let startLeft = maxIndex - 1;
 let startRight = maxIndex + 1;
 let truncArray = [];
 
 let findSequence = (inputArray) => {
 
   max = Math.max(...beginningArray); //9
   maxIndex = inputArray.indexOf(max); //5
   min = Math.min(...inputArray);
   minIndex = inputArray.indexOf(min);
 
   if (inputArray[startLeft] * 2 > max) {
     while (inputArray[startLeft] * 2 > max) {
       stopPoint = startLeft; //3
       startLeft--;
     }
     for (let i = stopPoint; i <= maxIndex; i++) {
       truncArray.push(inputArray[i]);
     }
   } else if (inputArray[startRight] * 2 > max) {
     while (inputArray[startRight] * 2 > max) {
       stopPoint = startLeft; //3
       startLeft++;
     }
     for (let i = maxIndex; i <= stopPoint; i++) {
       truncArray.push(inputArray[i]);
     }
   } else {
     inputArray.splice(maxIndex, 1);
     console.log(inputArray);
     // findSequence(inputArray);
   }
 
   let removeSize = inputArray.length - truncArray.length;
 
   return `final array is ${truncArray} and removals ${removeSize} elements`;
 };
 
 console.log(findSequence(testArray));
 