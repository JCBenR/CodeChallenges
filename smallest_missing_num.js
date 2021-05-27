//Find the smallest missing positive number from an unsorted array


let testArray1 = [1, 4, 2, -1, 6, 5] //should find 3
let testArray2 = [1, 2, 3, 4] // should return 5
let testArray3 = [8, 7, 6, 5, 4, 3, 2, 1] // should return 9

/*
1. sort the array s
2. strip out everything below 1
3. check that first number is 1 (if not, return 1 as it is lowest positive missing number)
4. start for first element in array and verify that next number in sequence is one more. if not, then lowest missing number is +1 of last number.
5. if make it to the end, then everything is in sequence and next lowest missing number is the next number in sequence.

*/

let removeNeg = (inArray) => {
    inArray.forEach(x => {
        if (x < 0) {
            inArray.shift()
        }
    });
}

let findSmallest = (inArray) => {
    inArray.sort();
    removeNeg(inArray);
    if (inArray[0] !== 1) {
        return 1;
    }
    for (let i = 0; i < inArray.length; i++) {
        if (inArray[i + 1] - inArray[i] > 1) {
            return inArray[i] + 1;
        }
    }
    let n = inArray.length;
    return inArray[n - 1] + 1;
}


console.log(findSmallest(testArray3));
