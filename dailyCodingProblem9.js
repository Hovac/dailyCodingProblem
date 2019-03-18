/*
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
Follow-up: Can you do this in O(N) time and constant space?
*/

/* 
this is solution is correct but only for arrays similar to nums, it doesn't work for other arrays. 
this solution is: find largest number (since it is guaranteed to show up in sum), then add to it members with index of max number(mI) + 2 until end of array,
then add to the new sum members with index of max number (mI-2, since we already have largest number in the sum), until the start of the array.
3 for loops are t=3n, so overall time complexity would be O(n).
var nums = [2,4,6,2,5];
var max = 0;
var maxIndex;

function calcSum(arr, mI) {
    var suma = 0;;
    for (i=mI; i<=arr.length; i += 2) {
        suma += arr[i];
    }
    for (i = mI - 2; i>=0; i-=2) {
        suma += arr[i];
    }
    return suma;
}

for (i=0; i<nums.length; i++) {
    if(nums[i] > max) {
        maxIndex = i;
        max = nums[i];
    }
}

console.log(calcSum(nums, maxIndex)); 
*/



var nums = [2,4,6,2,5];
var incl = nums[0];
var excl = 0;
var exclNew;
var sum;

for (i = 1; i<nums.length; i++) {
    exclNew = Math.max(incl, excl);

    incl = excl + nums[i]
    excl = exclNew;
    sum = Math.max(incl, excl);
}

console.log("Suma: ", sum);