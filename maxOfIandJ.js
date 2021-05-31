/**
 * Find the maximum value of `j – i` such that `A[j] > A[i]` in an array
 * Input:  [9, 10, 2, 6, 7, 12, 8, 1]
 * Output: 5 (i = 0, j = 5)
 * 
 * 1. look at index[1], is it greater than index[0]? 
 * 2. if so, is, 1-0 > newMax? newMax = 1-0. if not, move on.
 * 2b. if it's not possible to even get a better result, break.
 * 3. repeat this for every index.
 * 4. return new max (if > 0) or "not found".
 */

 let myInputArray = [9, 10, 2, 6, 7, 12, 8, 1];
 let testArray2 = [9, 2, 1, 6, 7, 3, 8];
 let badArray = [8, 7, 5, 4, 2, 1];
 let idxA, idxB;
 
 
  let findMaxSpread = (inputArray) =>{
     let newMax = 0;
     for (let i = 0; i < inputArray.length; i++) {
       for (let j = 0; j < inputArray.length; j++) {
         if(j-i < newMax) break; 
         if (inputArray[j] > inputArray[i]) {
           let spread = j-i;
           if (spread > newMax) {
             newMax = spread;
             idxA = i;
             idxB = j;
           }
         }
       }
     }
     if(newMax > 0)
       return `newMax: ${newMax}, idxA: ${idxA}, idxB: ${idxB}`;
     else
       return "no solution found";
  }
 
 console.log(findMaxSpread(myInputArray));
 